import { RecipeService} from '../../services/recipe-service.service'
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingAnimService } from '../../services/loading/loading-anim.service'
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  ingredients: String;
  number: '';
  recipes:any;
  loading:boolean = false;
  loadingSub: Subscription;
  input = document.getElementById('ingredients');

  constructor(private recipeService: RecipeService, private loadingScreenServ: LoadingAnimService) { }
 
  ngOnInit() {
    this.loadingSub = this.loadingScreenServ.loadingStatus.pipe(
      debounceTime(200)
    ).subscribe((value) =>{
      this.loading = value;
    })
  }


  getByIngredients () {
    this.ingredients = this.ingredients.replace(/\s/g, '');
    console.log(this.ingredients,this.number)
    this.recipeService.getByIngredient(this.ingredients,this.number)
    .subscribe(recipes => {
      this.ingredients = '';
      this.loading = true;
      this.recipes = recipes;
      console.log(recipes)   
    })
    error => {
      console.log(error)
    }};

    ngOnDestroy(){
      this.loadingSub.unsubscribe();
    }
}
