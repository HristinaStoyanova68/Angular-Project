import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {
  allIngredients = [] as String[];
  allInstructions = [] as String[];

    constructor(private apiService: ApiService) {}

    addRecipe(event: Event, inputImageUrl:string, recipeName: string, inputPrepTime: string, inputCoocTime: string, inputServings: string) {
        event.preventDefault();
        //TODO take current user Id
        //TODO difficulty & mealTipe

        const data = {
          name: recipeName,
          ingredients: this.allIngredients,
          instructions: this.allInstructions,
          prepTimeMinutes: inputPrepTime,
          cookTimeMinutes: inputCoocTime,
          servings: inputServings,
          // difficulty: string;
          // userId: User;
          image: inputImageUrl,
          // mealType: string;

        }

        this.apiService.createRecipe(data);
    }

    addIngredient(event: Event, inputIngredientQty: string, inputIngredientName: string) {
      event.preventDefault();


    }

    addInstruction(event: Event, textareaInstructions: string) {
      event.preventDefault();
    }

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

