const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    recipeName: {
      type: String,
      required: [true, "Recipe name is required!"],
      minLength: [5, "Recipe name must be at least 5 characters!"],
    },
    ingredients: [
      {
        type: String,
        required: [true, "Recipe ingredients are required!"],
      },
    ],
    instructions: [
      {
        type: String,
        required: [true, "Recipe instructions are required!"],
      },
    ],
    prepTime: {
      type: Number,
      min: 0,
    },
    cookTime: {
      type: Number,
      min: 0,
    },
    servings: {
      type: Number,
      min: 1,
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "difficult"],
      default: "easy",
    },
    ownerId: {
      type: String,
    },
    imageUrl: {
      type: String,
      required: [true, "Recipe image is required!"],
    },
    mealType: {
      type: String,
      enum: ["salads", "mains", "desserts"],
      default: "mains",
    },
    likes: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
