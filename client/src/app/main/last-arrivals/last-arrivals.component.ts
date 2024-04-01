import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Recipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-last-arrivals',
  templateUrl: './last-arrivals.component.html',
  styleUrls: ['./last-arrivals.component.css'],
})
export class LastArrivalsComponent implements OnInit {
  lastArrivals: Recipe[] | [] = [];
  hasLastArrivals: boolean = false;
  isLoading: boolean = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    //TODO implement pipe prop for ngFor

    this.apiService.getLastArrivals().subscribe((recipesList) => {
      this.isLoading = false;

      if (recipesList.length !== 0) {
        this.lastArrivals = recipesList;
        this.hasLastArrivals = true;
      } else {
        this.hasLastArrivals = false;
      }
    });
  }
}
