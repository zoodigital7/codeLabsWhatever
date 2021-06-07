import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}

// import { Ingredient } from '../shared/ingredient.model';

// export class Recipe {
//   public name: string;
//   public description: string;
//   public imagePath: string;
//   public ingredients: Ingredient[];

//   constructor({
//     name = '',
//     desc = '',
//     imagePath = '',
//     ...rest}) {
//     Object.assign(this, rest)
//     this.name = name;
//     this.description = desc;
//     this.imagePath = imagePath;
//     this.ingredients = rest.ingredients && rest.ingredients.length ? rest.ingredients.map(x => new Ingredient(x) : []);
//   }
// }
