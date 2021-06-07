import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      "Mac & Cheese Grilled Cheese",
      "Cheese upon cheese upon cheese",
      "https://i.imgur.com/RE1xBRe.png",
      [
        new Ingredient("Cheese", 1),
        new Ingredient("More Cheese", 3),
        new Ingredient("Bacon", 3),
        new Ingredient("More Bacon", 13),
      ]
    ),
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://i.imgur.com/RE1xBRe.png",
      [
        new Ingredient("Cheese", 1),
        new Ingredient("More Cheese", 3),
        new Ingredient("Bacon", 3),
        new Ingredient("More Bacon", 13),
      ]
    ),
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://i.imgur.com/RE1xBRe.png",
      [
        new Ingredient("Cheese", 1),
        new Ingredient("More Cheese", 3),
        new Ingredient("Bacon", 3),
        new Ingredient("More Bacon", 13),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
