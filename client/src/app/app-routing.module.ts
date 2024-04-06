import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './main/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  {path: 'auth', loadChildren: () => import('./user/user.module').then((m) => m.UserModule)},
  {path: 'site', loadChildren: () => import('./main/main.module').then((m) => m.MainModule)},
  {path: '**', redirectTo: '/404'}, 
  {path: '404', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
