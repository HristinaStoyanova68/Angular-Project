import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { LastArrivalsComponent } from './last-arrivals/last-arrivals.component';
import { ShareOnSocialMediaComponent } from './share-on-social-media/share-on-social-media.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AuthActivate } from '../guards/auth.activate';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { OwnerActivate } from '../guards/owner.activate';

const routes: Routes = [
  { path: 'salads', component: RecipesListComponent },
  { path: 'mains', component: RecipesListComponent },
  { path: 'desserts', component: RecipesListComponent },
  {
    path: 'add-recipe',
    component: AddRecipeComponent,
    canActivate: [AuthActivate],
  },
  { path: 'last-arrivals', component: LastArrivalsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'share', component: ShareOnSocialMediaComponent },
  { path: ':collectionName/:recipeId', component: RecipeDetailsComponent },
  {
    path: ':collectionName/:recipeId/edit',
    component: UpdateRecipeComponent,
    canActivate: [AuthActivate, OwnerActivate],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
