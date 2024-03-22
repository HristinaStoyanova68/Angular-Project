import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { SharedModule } from '../shared/shared.module';
import { RecipesListComponent } from './recipes-list/recipes-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    AddRecipeComponent,
    RecipesListComponent,
  ],
  imports: [
    CommonModule, SharedModule, MainRoutingModule,
  ],
  exports: [
    HomeComponent,
    MainComponent,
  ]
})
export class MainModule { }
