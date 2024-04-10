import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddRecipe, Recipe } from './types/recipe';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private router: Router) {}

  getLastArrivals() {
    return this.http.get<Recipe[] | []>(`/recipes/last-arrivals`);
  }

  getRecipesForCollectionName(collectionName: string) {
    return this.http.get<Recipe[] | []>(`/recipes/${collectionName}`);
  }

  getRecipeById(collectionName: string, id: string) {
    return this.http.get<Recipe>(`/recipes/${collectionName}/${id}`);
  }

  createRecipe(recipeData: AddRecipe) {
    return this.http.post<Recipe>(`/recipes/add-recipe`, recipeData).subscribe(
      (newRecipe) => {
        console.log(`Successfully added new recipe: ${newRecipe.recipeName}`);

        this.router.navigate(['/site/', newRecipe.mealType, newRecipe._id]);
      },

      (error) => console.log(error)
    );
  }

  updateRecipe(collectionName: string, recipeId: string, recipeData: Recipe) {
    return this.http
      .put<Recipe>(`/recipes/${collectionName}/${recipeId}/edit`, recipeData)
      .subscribe(
        (updatedRecipe) => {
          console.log('Successfully edited recipe: ', updatedRecipe.recipeName);

          this.router.navigate([
            '/site/',
            updatedRecipe.mealType,
            updatedRecipe._id,
          ]);
        },
        (error) => console.log(error)
      );
  }

  deleteRecipe(collectionName: string, recipeId: string) {
    this.http.delete(`/recipes/${collectionName}/${recipeId}/delete`).subscribe(
      () => {
        console.log('Successfully deleted recipe!');

        this.router.navigate(['/site/', collectionName]);
      },
      (error) => console.log(error)
    );
  }

  likeRecipe(collectionName: string, recipeId: string) {
    this.http
      .put<Recipe>(`/recipes/${collectionName}/${recipeId}/like`, {})
      .subscribe();
  }
}
