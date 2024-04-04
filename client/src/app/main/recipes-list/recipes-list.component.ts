import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Recipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  collectionName: string | undefined;
  recipes: Recipe[] | [] = [];
  hasRecipes: boolean = false;
  isLoading: boolean = true;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.collectionName = this.activatedRoute.snapshot.routeConfig?.path;

    if (
        this.collectionName === 'salads' ||
        this.collectionName === 'mains' || 
        this.collectionName === 'desserts'
        ) {
      this.apiService
        .getRecipesForCollectionName(this.collectionName)
        .subscribe((allRecipes) => {
            this.isLoading = false;

          if (allRecipes.length === 0) {
            this.hasRecipes = false;
          } else {
            this.recipes = [...allRecipes];
            this.hasRecipes = true;
          }

        });
    }
  }
}
