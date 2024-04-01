import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'my-recipes', component: ProfileComponent},
    {path: 'register', component: LoginComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class UserRoutingModule {}