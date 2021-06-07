import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    debugger;
    const recipes = this.recipeService.getRecipes();
    this.http
      .put('https://codelabsrecipe-default-rtdb.firebaseio.com/', recipes).subscribe(response => {
        console.log(response);
    });
  }
}
