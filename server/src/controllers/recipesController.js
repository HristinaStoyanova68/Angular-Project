const asyncHandler = require("express-async-handler");
const Collection = require("../models/Collection");
const Recipe = require("../models/Recipe");
const User = require("../models/User");

const getLastArrivals = asyncHandler(async (req, res) => {
  const saladsCollection = await Collection.findOne({ name: "salads" })
    .populate("recipes")
    .lean();

  const mainsCollection = await Collection.findOne({ name: "mains" })
    .populate("recipes")
    .lean();

  const dessertsCollection = await Collection.findOne({ name: "desserts" })
    .populate("recipes")
    .lean();

  if (!saladsCollection || !mainsCollection || !dessertsCollection) {
    return res.status(400).json({ message: "Collection not found!" });
  }

  const allRecipes = [];

  if (saladsCollection.recipes.length !== 0) {
    allRecipes.push(...saladsCollection.recipes);
  }

  if (mainsCollection.recipes.length !== 0) {
    allRecipes.push(...mainsCollection.recipes);
  }

  if (dessertsCollection.recipes.length !== 0) {
    allRecipes.push(...dessertsCollection.recipes);
  }

  let lastArrivals = [];

  if (allRecipes.length !== 0) {
    lastArrivals = allRecipes
      .sort((a, b) => b.createdAt - a.createdAt)
      .slice(0, 4);
  }

  res.status(200).json(lastArrivals);
});

const getAllRecipesForCollection = asyncHandler(async (req, res) => {
  const { collectionName } = req.params;
  const collection = await Collection.findOne({ name: collectionName })
    .populate("recipes")
    .lean();

  if (!collection) {
    return res.status(400).json({ message: "Collection not found!" });
  }

  let allRecipes = [];

  if (collection.recipes.length !== 0) {
    allRecipes = collection.recipes;
  }

  res.status(200).json(allRecipes);
});

const getRecipeById = asyncHandler(async (req, res) => {
  const { recipeId } = req.params;

  const recipe = await Recipe.findById(recipeId).lean();

  if (!recipe) {
    return res.status(400).json({ message: "Recipe not found!" });
  }

  res.status(200).json(recipe);
});

const getMyRecipes = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const currentUser = await User.findById({ _id: userId })
    .populate("myRecipes")
    .lean();

  if (!currentUser) {
    console.log("not found");
    return res.status(400).json({ message: "User not found!" });
  }

  let myRecipes = [];

  if (currentUser.myRecipes.length !== 0) {
    myRecipes = currentUser.myRecipes;
  }

  res.status(200).json(myRecipes);
});

const addRecipe = asyncHandler(async (req, res) => {
  const {
    recipeName,
    imageUrl,
    ingredients,
    instructions,
    prepTime,
    cookTime,
    servings,
    difficulty,
    mealType,
  } = req.body;

  const userId = req.user._id;

  const currentUser = await User.findById({ _id: userId });

  if (!currentUser) {
    return res.status(400).json({ message: "User not found!" });
  }

  const collection = await Collection.findOne({ name: mealType });

  if (!collection) {
    return res.status(400).json({ message: "Collection not found!" });
  }

  const newRecipe = await Recipe.create({
    recipeName,
    imageUrl,
    ingredients,
    instructions,
    prepTime,
    cookTime,
    servings,
    difficulty,
    mealType,
    ownerId: userId,
  });

  collection.recipes.push(newRecipe._id);
  await collection.save();

  await User.findByIdAndUpdate(
    { _id: userId },
    { $push: { myRecipes: newRecipe._id } }
  );

  res.status(201).json(newRecipe);
});

const editRecipe = asyncHandler(async (req, res) => {
  const {
    _id,
    recipeName,
    imageUrl,
    ingredients,
    instructions,
    prepTime,
    cookTime,
    servings,
    difficulty,
    ownerId,
    mealType,
  } = req.body;

  const { collectionName } = req.params;

  const userId = req.user._id;

  if (ownerId !== userId) {
    return res.status(403).json({ message: "Only owner can update recipe!"});
  }

  const currentUser = await User.findById({ _id: userId });

  const recipe = await Recipe.findById(_id).lean();

  if (!recipe) {
    return res.status(400).json({ message: "Recipe not found!" });
  }

  if (!currentUser) {
    return res.status(400).json({ message: "User not found!" });
  }

  const currCollection = await Collection.findOne({ name: collectionName });
  const editedCollection = await Collection.findOne({ name: mealType });

  if (!currCollection || !editedCollection) {
    return res.status(400).json({ message: "Collection not found!" });
  }

  const updatedRecipe = await Recipe.findByIdAndUpdate(_id, {
    recipeName,
    imageUrl,
    ingredients,
    instructions,
    prepTime,
    cookTime,
    servings,
    difficulty,
    ownerId: userId,
    mealType,
  });

  if (collectionName === mealType) {
    await Collection.findOneAndUpdate(
      { name: mealType, "recipes._id": _id },
      { $set: { "recipes.$.fieldToUpdate": updatedRecipe } }
    );
  } else {
    await Collection.findOneAndUpdate(
      { name: collectionName },
      { $pull: { recipes: _id } }
    );

    editedCollection.recipes.push(updatedRecipe._id);
    await editedCollection.save();
  }

  res.status(200).json(updatedRecipe);
});

const deleteRecipe = asyncHandler(async (req, res) => {
  const { collectionName, recipeId } = req.params;
  const userId = req.user._id;

  const recipe = await Recipe.findById({ _id: recipeId }).lean();

  if (recipe.ownerId !== userId) {
    return res
      .status(403)
      .json({ message: "You are not allowed to delete this recipe!" });
  }

  await Recipe.findByIdAndDelete({ _id: recipeId });

  await Collection.findOneAndUpdate(
    { name: collectionName },
    { $pull: { recipes: recipeId } }
  );
  await User.findByIdAndUpdate(
    { _id: userId },
    { $pull: { myRecipes: recipeId } }
  );

  res.status(204).json({ message: "Successfully deleted recipe!" });
});

const likeRecipe = asyncHandler(async (req, res) => {
  const { recipeId } = req.params;
  const userId = req.user._id;

  const recipe = await Recipe.findById({ _id: recipeId });
  recipe.likes.push(userId);
  await recipe.save();

  res.status(200).json(recipe);
});

module.exports = {
  getLastArrivals,
  getAllRecipesForCollection,
  getRecipeById,
  getMyRecipes,
  addRecipe,
  editRecipe,
  deleteRecipe,
  likeRecipe,
};
