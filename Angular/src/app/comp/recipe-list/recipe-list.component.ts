import { Component, OnInit } from '@angular/core';
import { RecipeService} from '../../services/recipe-service.service'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  ingredients: '';
  number: '';
  recipes:any;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  getByIngredients () {
    console.log(this.ingredients,this.number)
    this.recipeService.getByIngredient(this.ingredients,this.number)
    .subscribe(recipes => {
      this.recipes = recipes;
      console.log(recipes)
    }),
    error => {
      console.log(error)
    }};


}