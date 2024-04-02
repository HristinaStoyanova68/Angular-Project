import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { LastArrivalsComponent } from './last-arrivals/last-arrivals.component';
import { ShareOnSocialMediaComponent } from './share-on-social-media/share-on-social-media.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AuthActivate } from '../guards/auth.activate';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'salads', component: RecipesListComponent },
  { path: 'mains', component: RecipesListComponent },
  { path: 'desserts', component: RecipesListComponent },
  // {path: ':collectionName/:recipeId', component: RecipeDetailsComponent},
  {path: 'details', component: RecipeDetailsComponent},
  {
    path: 'add-recipe', 
    component: AddRecipeComponent,
    // canActivate: [AuthActivate],
  },
  {
    path: ':collectionName/:recipeId/edit',
    component: UpdateRecipeComponent,
    canActivate: [AuthActivate],
  },
  {path: 'last-arrivals', component: LastArrivalsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'share', component: ShareOnSocialMediaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
