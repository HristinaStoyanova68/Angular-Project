import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Recipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit{
  recipe = {} as Recipe;
  isOwner: boolean = false;

  constructor(private apiService: ApiService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((data) => {
      const collectionName = data['collectionName'];
      const recipeId = data['recipeId'];
      
      this.apiService.getRecipeById(collectionName, recipeId).subscribe((currentRecipe) => {
        
        this.recipe = currentRecipe;
      })

    })
  }

  onLike() {}
}
