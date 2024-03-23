import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Recipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-last-arrivals',
  templateUrl: './last-arrivals.component.html',
  styleUrls: ['./last-arrivals.component.css'],
})
export class LastArrivalsComponent implements OnInit{
    recipesList: Recipe[] = [];
    isLoading: boolean = true;

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.apiService.getRecipesList().subscribe((recipesList) => {
            this.recipesList = recipesList.slice(-3);

            setTimeout(() => {
                this.isLoading = false;
            }, 1000)
        });  
    }
}
