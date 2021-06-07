import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  rootApi: string
  recipeApi: string
  constructor(private http: HttpClient, private recipeService: RecipeService) {
    this.rootApi = 'https://codelabsrecipe-default-rtdb.firebaseio.com/'
    this.recipeApi = `${this.rootApi}recipes.json`
  }

  storeRecipes() {
    debugger
    const recipes = this.recipeService.getRecipes()
    if (recipes) {
      this.http
        .put(this.recipeApi, recipes).subscribe(response => {
          if (response) {
            console.log('Recipes Saved In Firebase!!')
          }
        });
    }
  }

  // fetchRecipes() {
  //   this.http.get<Recipe[]>(this.recipeApi).subscribe(recipes => {
  //     if (recipes && recipes.length) {
  //       this.recipeService.setRecipes(recipes)
  //     } else {
  //       console.log('There are no recipes in the database!!')
  //     }
  //   })
  // }

  fetchRecipes() {
    this.http.get<Recipe[]>(this.recipeApi)
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }

          })
        })).subscribe(recipes => {
          this.recipeService.setRecipes(recipes)
        })
  }

}
