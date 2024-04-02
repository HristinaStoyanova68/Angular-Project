import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Recipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css']
})
export class UpdateRecipeComponent implements OnInit{
  updateForm = this.fb.group({
    imageUrl: ['', [Validators.required]],
    recipeName: ['',[ Validators.required, Validators.minLength(5)]],
    // editIngredientQty: [''],
    // editIngredientType: [''],
    // editIngredientName: [''],
    // ingredients: [[]],
    // instructions: [[]],


  })

  isEditted: boolean = false;
  recipe = {} as Recipe;
  editIngredientIndex: number = 0;
  editInstructionIndex: number = 0;

  //TODO add guard for owner of the recipe

  constructor(private fb: FormBuilder, private apiService: ApiService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((data) => {
      const collectionName = data['collectionName'];
      const recipeId = data['recipeId'];

      
      this.apiService.getRecipeById(collectionName, recipeId).subscribe((currentRecipe) => {
        
        this.recipe = currentRecipe;
      })

    })
  }

  updateSubmitHandler() {

  }

  onPencil(event: Event, i: number) {
    event.preventDefault();

    this.editIngredientIndex = i;

    this.isEditted = true;

    // this.updateForm.controls['editIngredientQty']?.setValue(50)

    // if (
    //   form.value.ingredientQty === null ||
    //   form.value.ingredientQty === 0 ||
    //   form.value.ingredientType === '' ||
    //   form.value.ingredientName === ''
    //   ) {
    //     // TODO have to implement error handling !!!

    //     return;
    // }

    // const currIngredientAsStr = `${form.value.ingredientQty}${form.value.ingredientType} ${form.value.ingredientName}`;

    // // this.allIngredients.push(currIngredientAsStr);
    // form.controls['ingredientQty'].reset();
    // form.controls['ingredientType'].reset();
    // form.controls['ingredientName'].reset();

  }

  onChecked(event: Event, i: number) {
    event.preventDefault();

    //TODO some logic here

    this.isEditted = false;

  }

  onTrash(i: number) {
    
  }

  addIngredient(event: Event) {}
  addInstruction(event: Event) {}



  

}
