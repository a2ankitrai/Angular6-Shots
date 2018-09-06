import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private shoppingListService: ShoppingListService) { }

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Paneer Butter Masala',
      'Paneer spicy masala',
      'https://tinyurl.com/y7y7re9a',
      [
        new Ingredient('Paneer', 8),
        new Ingredient('Onion', 3),
        new Ingredient('Tomato', 2)
      ]),
    new Recipe('Grilled steak',
      'Delicious Grilled Steak',
      'https://tinyurl.com/ybykunwm',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Butter', 2)
      ]
    )
  ];

  getRecipies() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
