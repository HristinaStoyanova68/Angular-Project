import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  recipes: Recipe[] | [] = [];
  hasRecipes: boolean = false;
  isLoading: boolean = true;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getMyRecipes().subscribe((myRecipes) => {
      this.isLoading = false;

      if (myRecipes?.length !== 0) {
        this.recipes = myRecipes;
        this.hasRecipes = true;
      } else {
        this.hasRecipes = false;
      }
    });
  }
}
