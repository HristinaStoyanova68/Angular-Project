import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {
    constructor(private apiService: ApiService) {}

    addRecipe(ev: Event, recipeName: string) {
        ev.preventDefault();

        this.apiService.createRecipe(recipeName);
    }
}
