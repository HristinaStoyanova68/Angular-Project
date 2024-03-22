import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
  ],
  imports: [
    CommonModule, MainRoutingModule,
  ],
  exports: [
    HomeComponent,
    MainComponent,
  ]
})
export class MainModule { }
