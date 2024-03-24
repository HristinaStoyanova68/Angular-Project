import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { LastArrivalsComponent } from './last-arrivals/last-arrivals.component';
import { ShareOnSocialMediaComponent } from './share-on-social-media/share-on-social-media.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'recipesList', component: RecipesListComponent },
  {path: 'last-arrivals', component: LastArrivalsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'share', component: ShareOnSocialMediaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
