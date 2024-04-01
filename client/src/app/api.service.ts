import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { AddRecipe, Recipe } from './types/recipe';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private router: Router) {}

  getLastArrivals() {
    const { apiUrl } = environment;

    return this.http.get<Recipe[] | []>(`${apiUrl}/recipes/last-arrivals`);
  }

  getRecipesForCollectionName(collectionName: string) {
    const { apiUrl } = environment;

    return this.http.get<Recipe[] | []>(`${apiUrl}/recipes/${collectionName}`);
  }

  getRecipeById(collectionName: string, id: string) {
    const { apiUrl } = environment;

    return this.http.get<Recipe>(`${apiUrl}/recipes/${collectionName}/${id}`);
  }

  createRecipe(recipeData: AddRecipe) {
    const { apiUrl } = environment;

    return this.http
      .post<Recipe>(`${apiUrl}/recipes/add-recipe`, recipeData)
      .subscribe(
        (newRecipe) => {
          console.log(`Successfully added new recipe: ${newRecipe.recipeName}`);

          this.router.navigate(['/']);
        },

        (error) => console.log(error)
      );
  }
}
