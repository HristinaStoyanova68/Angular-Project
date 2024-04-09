import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Recipe } from 'src/app/types/recipe';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  collectionName: string = '';
  recipeId: string = '';
  recipe = {} as Recipe;
  isOwner: boolean = false;
  isLiked: boolean = false;

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.collectionName = data['collectionName'];
      this.recipeId = data['recipeId'];

      this.apiService
        .getRecipeById(this.collectionName, this.recipeId)
        .subscribe((currentRecipe) => {

          this.recipe = currentRecipe;

          if (this.isLoggedIn) {
            const userId = this.userService.user!.id;

            if (userId === this.recipe.ownerId) {
              this.isOwner = true;
            }

            if (this.recipe.likes.includes(userId)) {
              this.isLiked = true;
            }
          }
        });
    });
  }

  onLike() {
    this.apiService.likeRecipe(this.collectionName, this.recipeId);

    this.isLiked = true;
  }
}
