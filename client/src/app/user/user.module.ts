import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, ProfileComponent],
  imports: [CommonModule, SharedModule, UserRoutingModule, RouterModule],
  exports: [LoginComponent, ProfileComponent],
})
export class UserModule {}
