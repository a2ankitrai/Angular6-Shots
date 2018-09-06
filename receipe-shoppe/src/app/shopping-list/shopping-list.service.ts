import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }

  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 10),
    new Ingredient('Onion', 5)
  ];
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredient() {
    return this.ingredients.slice();
  }

  public addIngredient(ingredient: Ingredient) {
    console.log('Ingredient added: ' + ingredient.name + '-' + ingredient.amount);
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  public addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }
}
