const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    recipeName: {
      type: String,
      require: [true, "Recipe name is required!"],
      minLength: [5, "Recipe name must be at least 5 characters!"],
    },
    ingredients: [
      {
        type: String,
        require: [true, "Recipe ingredients are required!"],
      },
    ],
    instructions: [
      {
        type: String,
        require: [true, "Recipe instructions are required!"],
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
        enum: ['easy', 'medium', 'difficult'],
        default: 'easy',
    },
    ownerId:  {
        type: String,
    },
    imageUrl:  {
        type: String,
        require: [true, "Recipe image is required!"]
    },
    mealType: {
        type: String,
        enum: ['salads', 'mains', 'desserts'],
        default: 'mains',
    },
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
