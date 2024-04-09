export interface Recipe {
  _id: string;
  recipeName: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: string;
  ownerId: string;
  imageUrl: string;
  createdAt: number;
  updatedAt: number;
  mealType: string;
  likes: string[];
}

export interface AddRecipe {
  imageUrl: string;
  recipeName: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: string;
  mealType: string;
}
