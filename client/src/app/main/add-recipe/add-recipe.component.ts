import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { AddRecipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
})
export class AddRecipeComponent {
  allIngredients = [] as string[];
  allInstructions = [] as string[];
  recipeData = {} as AddRecipe;

  constructor(private apiService: ApiService) {}

  addRecipe(form: NgForm) {
    //TODO take current user Id
    //TODO ask for last nonadded ingredient and instruction

    const {
      imageUrl,
      recipeName,
      ingredientQty,
      ingredientType,
      ingredientName,
      instruction,
      prepTime,
      cookTime,
      servings,
      difficulty,
      mealType,
    } = form?.value;

    if (ingredientQty || ingredientType || ingredientName) {
      const currIngredientAsStr = `${form.value.ingredientQty} ${form.value.ingredientType} ${form.value.ingredientName}`;

      this.allIngredients.push(currIngredientAsStr);
    }

    if (instruction) {
      this.allInstructions.push(form.value.instruction);
    }

    this.recipeData = {
      imageUrl,
      recipeName,
      ingredients: this.allIngredients,
      instructions: this.allInstructions,
      prepTime,
      cookTime,
      servings,
      difficulty,
      mealType,
    };

    console.log(this.recipeData);

    this.apiService.createRecipe(this.recipeData);

    form.reset();
  }

  addIngredient(event: Event, form: NgForm) {
    event.preventDefault();

    if (
      form.value.ingredientQty === null ||
      form.value.ingredientQty === 0 ||
      form.value.ingredientType === '' ||
      form.value.ingredientName === ''
    ) {
      // TODO have to implement error handling !!!

      return;
    }

    const currIngredientAsStr = `${form.value.ingredientQty} ${form.value.ingredientType} ${form.value.ingredientName}`;

    this.allIngredients.push(currIngredientAsStr);
    form.controls['ingredientQty'].reset();
    form.controls['ingredientType'].reset();
    form.controls['ingredientName'].reset();
  }

  addInstruction(event: Event, form: NgForm) {
    event.preventDefault();

    this.allInstructions.push(form.value.instruction);

    form.controls['instruction'].reset();
  }
}
