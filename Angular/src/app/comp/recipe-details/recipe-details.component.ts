import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe-service.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe:any = [];
  


  constructor(  
    private recipeService: RecipeService,   
    private route: ActivatedRoute,
    private router: Router) {
  
   }

  ngOnInit(){
    this.getRecipe(this.route.snapshot.paramMap.get('id'));

  }

  getRecipe(id){
    this.recipeService.getRecipe(id).subscribe(
      (recipe) => {
        this.recipe = [recipe];
        console.log(recipe)
      }
    )
  }

}
