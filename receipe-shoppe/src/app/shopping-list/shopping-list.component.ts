import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Cottage Cheese', 25),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Onion', 5),
    new Ingredient('Chicken', 3)
  ];

  constructor() { }

  ngOnInit() {
  }

}
