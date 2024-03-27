const asyncHandler = require("express-async-handler");
const Collection = require("../models/Collection");
const Recipe = require("../models/Recipe");
const User = require("../models/User");

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
  // const {}
});

module.exports = {
  getAllRecipesForCollection,
  getRecipeById,
  getMyRecipes,
  addRecipe,
};
