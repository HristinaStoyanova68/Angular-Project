const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Recipe name is required!"],
      minLength: [5, "Recipe name must be 5 to 20 characters!"],
      maxLength: [20, "Recipe name must be 5 to 20 characters!"],
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
    prepTimeMinutes: {
        type: Number,
        min: 0,
    },
    cookTimeMinutes: {
        type: Number,
        min: 0,
    },
    servings: {
        type: Number,
        min: 1,
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Difficult'],
        default: 'Easy',
    },
    ownerId:  {
        type: String,
    },
    image:  {
        type: String,
        require: [true, "Recipe image is required!"]
    },
    mealType: {
        type: String,
        enum: ['Salad', 'Main Course', 'Dessert'],
        default: 'Main Course',
    },
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
