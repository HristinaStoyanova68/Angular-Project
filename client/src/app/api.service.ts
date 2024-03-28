import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Recipe } from './types/recipe';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getLastArrivals () {
    const { apiUrl} = environment;

    return this.http.get<Recipe[] | []>(`${apiUrl}/recipes/last-arrivals`);
  }

  getRecipesForCollectionName (collectionName: string) {
    const { apiUrl} = environment;

    return this.http.get<Recipe[] | []>(`${apiUrl}/recipes/${collectionName}`);
  }

  getRecipeById (id: string) {
    const {apiUrl} = environment;

    return this.http.get<Recipe>(`${apiUrl}/recipes/${id}`);
  }

  createRecipe(data: {}) {
    const {apiUrl} = environment;
    const payload = {data};

    return this.http.post<Recipe>(`${apiUrl}/recipes-list`, payload);
  }
}
