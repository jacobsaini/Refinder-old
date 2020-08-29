import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { RecipeService } from '../../services/recipe-service.service'
import { LoadingAnimService } from '../../services/loading/loading-anim.service';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe:any = [{}];





  options = { autoHide: false, scrollbarMinSize: 40, scrollbarMaxSize: 60 };
  numbers = Array(1).fill(0);
  instructionsChange: boolean = true;
  ingredientsChange: boolean = false;
  extrasChange: boolean = false;
  loadingSub: Subscription;
  loading: boolean = false;


  constructor(  
    private recipeService: RecipeService,
    private loadingScreenServ: LoadingAnimService,   
    private route: ActivatedRoute) {
  
   }

  ngOnInit(){
    this.loadingSub = this.loadingScreenServ.loadingStatus
    .pipe(debounceTime(200))
    .subscribe((value) => {
      this.loading = value;
    });
    this.getRecipe(this.route.snapshot.paramMap.get('id'));

  }

  getRecipe(id){
    this.recipeService.getRecipe(id).subscribe(
      (recipe) => {
        this.loading = true;
        this.recipe = [recipe];
        console.log(recipe)
      }
    )
  }

  changeToIngredients(){
    this.instructionsChange = false;
    this.ingredientsChange = !this.ingredientsChange;
    this.extrasChange = false;
  }
  changeToExtra(){
    this.extrasChange = !this.extrasChange;
    this.instructionsChange = false;
    this.ingredientsChange = false;
  }
  changeToInstruction(){
    this.extrasChange = false;
    this.ingredientsChange = false;
    this.instructionsChange = !this.instructionsChange;
  }

}
