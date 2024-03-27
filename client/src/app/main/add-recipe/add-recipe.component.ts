import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {
  allIngredients = [] as String[];

    constructor(private apiService: ApiService) {}

    addRecipe(ev: Event, recipeName: string) {
        ev.preventDefault();

        this.apiService.createRecipe(recipeName);
    }

    addIngredient() {}

    addInstruction() {}

}


// <div class="form-group ingredients">
// <label for="ingredientQty">Ingredients:</label>
// <div id="ingredients-container">
//     <input type="number" min="0" name="ingredientQty" id="ingredientQty" [(ngModel)]="ingredientQty">
//     <input type="text" name="ingredientName" id="ingredientName" [(ngModel)]="ingredientName">
//     <button type="button" (click)="addIngredient()">Add Ingredient</button>
// </div>
// </div>
// <div *ngFor="let ingredient of ingredients">
// {{ ingredient.qty }} - {{ ingredient.name }}
// </div>




// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-your-component',
//   templateUrl: './your-component.component.html',
//   styleUrls: ['./your-component.component.css']
// })
// export class YourComponent {
//   ingredientQty: number;
//   ingredientName: string;
//   ingredients: { qty: number, name: string }[] = [];

//   addIngredient() {
//     if (this.ingredientQty && this.ingredientName) {
//       this.ingredients.push({ qty: this.ingredientQty, name: this.ingredientName });
//       // Изчистване на стойностите на инпут полетата
//       this.ingredientQty = null;
//       this.ingredientName = '';
//     }
//   }
// }

