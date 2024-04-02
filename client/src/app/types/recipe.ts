import { User } from "./user";

export interface Recipe {
  _id: string;
  recipeName: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: string;
  ownerId: User;
  imageUrl: string;
  createdAt: number;
  updatedAt: number;
  mealType: string;
}

export interface AddRecipe {
  imageUrl: string,
  recipeName: string,
      ingredients: string[],
      instructions: string[],
      prepTime: number,
      cookTime: number,
      servings: number,
      difficulty: string,
      mealType: string,
}

