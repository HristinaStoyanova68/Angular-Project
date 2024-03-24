import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { SharedModule } from '../shared/shared.module';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { LastArrivalsComponent } from './last-arrivals/last-arrivals.component';
import { ShareOnSocialMediaComponent } from './share-on-social-media/share-on-social-media.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServiceComponent } from './service/service.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    AddRecipeComponent,
    RecipesListComponent,
    LastArrivalsComponent,
    ShareOnSocialMediaComponent,
    AboutUsComponent,
    ServiceComponent,
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
