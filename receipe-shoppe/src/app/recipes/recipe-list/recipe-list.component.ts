import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Paneer Butter Masala', 'Paneer spicy masala', 'https://tinyurl.com/y7y7re9a'),
    new Recipe('Grilled steak', 'Delicious Grilled Steak', 'https://tinyurl.com/ybykunwm')
  ];

  constructor() { }

  ngOnInit() {
  }

}
