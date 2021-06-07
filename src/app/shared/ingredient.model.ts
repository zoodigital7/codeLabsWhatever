export class Ingredient {
  constructor(public name: string, public amount: number) {}
}
// export class Ingredient {
//   name: string
//   amount: number
//   constructor({
//     name = '',
//     amount = 0,
//     ...rest
//   }) {
//     Object.assign(this, rest)
//     this.name = name
//     this.amount = amount
//   }
// }
