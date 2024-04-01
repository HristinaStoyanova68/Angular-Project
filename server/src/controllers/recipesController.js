const asyncHandler = require("express-async-handler");
const Collection = require("../models/Collection");
const Recipe = require("../models/Recipe");
const User = require("../models/User");

const getAllRecipes = asyncHandler(async (req, res) => {
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
    return res.status(204).json({ message: "Collection not found!" });
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

  const lastArrivals = [];

  if (allRecipes.length !== 0) {
    lastArrivals = allRecipes.sort((a,b) => b.createdAt - a.createdAt).slice(0, 4);
  }

  res.status(200).json(lastArrivals);
});

const getAllRecipesForCollection = asyncHandler(async (req, res) => {
  const { collectionName } = req.params;
  const collection = await Collection.findOne({ name: collectionName })
    .populate("recipes")
    .lean();

  if (!collection) {
    return res.status(204).json({ message: "Collection not found!" });
  }

  const allRecipes = [];

  if (collection.recipes.length !== 0) {
    allRecipes = [...collection.recipes];
  }

  res.status(200).json(allRecipes);
});

const getRecipeById = asyncHandler(async (req, res) => {
  const { recipeId } = req.params;
  const recipe = await Recipe.findById({ _id: recipeId }).lean();

  if (!recipe) {
    return res.status(204).json({ message: "Recipe not found!" });
  }

  res.status(200).json(recipe);
});

const getMyRecipes = asyncHandler(async (req, res) => {
  const userId = req.user.id; //TODO implement correct userId depending on Angular

  const currentUser = await User.findById({ _id: userId })
    .populate("myRecipes")
    .lean();

  if (!currentUser) {
    return res.status(204).json({ message: "User not found!" });
  }

  const myRecipes = [];

  if (currentUser.myRecipes.length !== 0) {
    myRecipes = [...currentUser.myRecipes];
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
    mealType
  } = req.body;


//   const userId = req.user.id; //TODO implement correct userId depending on Angular

//   const currentUser = await User.findById({ _id: userId });
  const currentUser = await User.findById({ _id: '6606952aef45ddfea712a7ab'});

  if (!currentUser) {
    return res.status(204).json({ message: "User not found!" });
  }

  const collection = await Collection.findOne({name: mealType});

  if (!collection) {
    return res.status(204).json({ message: "Collection not found!" });
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
    // ownerId: userId
  });

  collection.recipes.push(newRecipe._id);
  await collection.save();

  currentUser.myRecipes.push(newRecipe._id);
  await currentUser.save();

  res.status(201).json(newRecipe);

});

module.exports = {
  getAllRecipes,
  getAllRecipesForCollection,
  getRecipeById,
  getMyRecipes,
  addRecipe,
};
