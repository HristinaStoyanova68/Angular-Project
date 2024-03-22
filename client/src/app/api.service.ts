import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Recipe } from './types/recipe';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getRecipesList () {
    const { apiUrl} = environment;

    return this.http.get<Recipe[]>(`${apiUrl}/recipes-list`);
  }

  getRecipe (id: string) {
    const {apiUrl} = environment;

    return this.http.get<Recipe>(`${apiUrl}/recipes-list/${id}`);
  }

  createRecipe(recipeName: string) {
    const {apiUrl} = environment;
    const payload = {recipeName};

    return this.http.post<Recipe>(`${apiUrl}/recipes-list`, payload);
  }
}
