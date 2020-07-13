import { Component, OnInit } from '@angular/core';
import { RecipeService} from '../../services/recipe-service.service'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  ingredients: '';
  recipes = null;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  getByIngredients () {
    this.recipeService.getByIngredients(this.ingredients)
    .subscribe(data =>{
      this.recipes = data;
      
    })
    
  }


}
