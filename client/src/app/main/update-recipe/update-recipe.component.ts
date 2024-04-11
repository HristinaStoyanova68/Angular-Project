import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Recipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css'],
})
export class UpdateRecipeComponent implements OnInit {
  isIngredientEdited: boolean = false;
  isInstructionEdited: boolean = false;
  editIngredientIndex: number = 0;
  editInstructionIndex: number = 0;
  recipe = {} as Recipe;
  collectionName: string = '';
  recipeId: string = '';

  updateForm = this.fb.group({
    imageUrl: ['', [Validators.required]],
    recipeName: ['', [Validators.required, Validators.minLength(5)]],
    editIngredientGroup: this.fb.group({
      editIngredientQty: [''],
      editIngredientType: [''],
      editIngredientName: [''],
    }),
    addIngredientGroup: this.fb.group({
      ingredientQty: [''],
      ingredientType: [''],
      ingredientName: [''],
    }),
    editInstructionGroup: this.fb.group({
      editInstruction: [''],
    }),
    addInstructionGroup: this.fb.group({
      instruction: [''],
    }),
    prepTime: [0],
    cookTime: [0],
    servings: [0],
    difficulty: [''],
    mealType: [''],
  });

  //TODO add guard for owner of the recipe

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.collectionName = data['collectionName'];
      this.recipeId = data['recipeId'];

      this.apiService
        .getRecipeById(this.collectionName, this.recipeId)
        .subscribe((currentRecipe) => {
          this.recipe = currentRecipe;

          this.updateForm.setValue({
            imageUrl: this.recipe.imageUrl,
            recipeName: this.recipe.recipeName,
            editIngredientGroup: {
              editIngredientQty: '',
              editIngredientType: '',
              editIngredientName: '',
            },
            addIngredientGroup: {
              ingredientQty: '',
              ingredientType: '',
              ingredientName: '',
            },
            editInstructionGroup: {
              editInstruction: '',
            },
            addInstructionGroup: {
              instruction: '',
            },
            prepTime: this.recipe.prepTime,
            cookTime: this.recipe.cookTime,
            servings: this.recipe.servings,
            difficulty: this.recipe.difficulty,
            mealType: this.recipe.mealType,
          });
        });
    });
  }

  updateSubmitHandler(): void {
    if (
      this.updateForm.controls.addIngredientGroup.controls.ingredientQty
        .value ||
      this.updateForm.controls.addIngredientGroup.controls.ingredientType
        .value ||
      this.updateForm.controls.addIngredientGroup.controls.ingredientName.value
    ) {
      const currIngredientAsStr = `${this.updateForm.controls.addIngredientGroup.controls.ingredientQty.value} ${this.updateForm.controls.addIngredientGroup.controls.ingredientType.value} ${this.updateForm.controls.addIngredientGroup.controls.ingredientName.value}`;

      this.recipe.ingredients.push(currIngredientAsStr);
    }

    if (
      this.updateForm.controls.addInstructionGroup.controls.instruction.value
    ) {
      this.recipe.instructions.push(
        this.updateForm.controls.addInstructionGroup.controls.instruction.value
      );
    }

    if (
      this.updateForm.controls.imageUrl.value !== null &&
      this.updateForm.controls.recipeName.value !== null &&
      this.updateForm.controls.prepTime.value !== null &&
      this.updateForm.controls.cookTime.value !== null &&
      this.updateForm.controls.difficulty.value !== null &&
      this.updateForm.controls.servings.value !== null &&
      this.updateForm.controls.mealType.value !== null
    ) {
      this.recipe.imageUrl = this.updateForm.controls.imageUrl.value;
      this.recipe.recipeName = this.updateForm.controls.recipeName.value;
      this.recipe.prepTime = this.updateForm.controls.prepTime.value;
      this.recipe.cookTime = this.updateForm.controls.cookTime.value;
      this.recipe.difficulty = this.updateForm.controls.difficulty.value;
      this.recipe.servings = this.updateForm.controls.servings.value;
      this.recipe.mealType = this.updateForm.controls.mealType.value;
    }

    this.apiService.updateRecipe(
      this.collectionName,
      this.recipeId,
      this.recipe
    );

    this.updateForm.reset();

    // console.log(this.recipe);
  }

  deleteSubmitHandler(event: Event): void {
    event.preventDefault();

    this.apiService.deleteRecipe(this.collectionName, this.recipeId);
  }

  // openDeleteConfirmationModal() {}

  onIngredientPencil(event: Event, i: number) {
    event.preventDefault();

    const currIngredientAsArr = this.recipe.ingredients[i].split(' ');
    const currIngredientQty = currIngredientAsArr[0];
    const currIngredientType = currIngredientAsArr[1];
    const currIngredientName = currIngredientAsArr.slice(2).join(' ');

    this.updateForm.controls.editIngredientGroup.controls.editIngredientQty.setValue(
      currIngredientQty
    );
    this.updateForm.controls.editIngredientGroup.controls.editIngredientType.setValue(
      currIngredientType
    );
    this.updateForm.controls.editIngredientGroup.controls.editIngredientName.setValue(
      currIngredientName
    );

    this.editIngredientIndex = i;
    this.isIngredientEdited = true;
  }

  onIngredientChecked(event: Event, i: number) {
    event.preventDefault();

    this.editIngredientIndex = i;

    const { editIngredientQty, editIngredientType, editIngredientName } =
      this.updateForm.controls.editIngredientGroup.value;

    if (
      editIngredientQty === null ||
      editIngredientType === '' ||
      editIngredientName === ''
    ) {
      //TODO implement error handling

      return;
    }

    const editedIngredient = `${editIngredientQty} ${editIngredientType} ${editIngredientName}`;

    this.recipe.ingredients.splice(i, 1, editedIngredient);

    this.isIngredientEdited = false;
  }

  onIngredientTrash(event: Event, i: number) {
    event.preventDefault();

    this.recipe.ingredients.splice(i, 1);
  }

  addIngredient(event: Event) {
    event.preventDefault();

    const { ingredientQty, ingredientType, ingredientName } =
      this.updateForm.controls.addIngredientGroup.value;

    if (
      ingredientQty === null ||
      ingredientType === '' ||
      ingredientName === ''
    ) {
      //TODO implement error handling

      return;
    }

    const newIngredient = `${ingredientQty} ${ingredientType} ${ingredientName}`;

    this.recipe.ingredients.push(newIngredient);

    this.updateForm.controls.addIngredientGroup.controls.ingredientQty.reset();
    this.updateForm.controls.addIngredientGroup.controls.ingredientType.reset();
    this.updateForm.controls.addIngredientGroup.controls.ingredientName.reset();
  }

  onInstructionPencil(event: Event, i: number) {
    event.preventDefault();

    const currInstruction = this.recipe.instructions[i];

    this.updateForm.controls.editInstructionGroup.controls.editInstruction.setValue(
      currInstruction
    );

    this.editInstructionIndex = i;
    this.isInstructionEdited = true;
  }

  onInstructionChecked(event: Event, i: number) {
    event.preventDefault();

    this.editInstructionIndex = i;

    const { editInstruction } =
      this.updateForm.controls.editInstructionGroup.value;

    if (
      editInstruction === undefined ||
      editInstruction === null ||
      editInstruction === ''
    ) {
      //TODO implement error handling

      return;
    }

    this.recipe.instructions.splice(i, 1, editInstruction);

    this.isInstructionEdited = false;
  }

  onInstructionTrash(event: Event, i: number) {
    event.preventDefault();

    this.recipe.instructions.splice(i, 1);
  }

  addInstruction(event: Event) {
    event.preventDefault();

    const { instruction } = this.updateForm.controls.addInstructionGroup.value;
    // console.log(instruction);

    if (
      instruction === undefined ||
      instruction === null ||
      instruction === ''
    ) {

      return;
    }

    this.recipe.instructions.push(instruction);

    this.updateForm.controls.addInstructionGroup.controls.instruction.reset();
  }
}
