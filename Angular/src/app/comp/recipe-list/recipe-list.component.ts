import { RecipeService } from '../../services/recipe-service.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingAnimService } from '../../services/loading/loading-anim.service';
import { debounceTime } from 'rxjs/operators';

import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  animations: [
    trigger('fade', [
      transition('out <=> in', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class RecipeListComponent implements OnInit {
  loadingSub: Subscription;
  loading: boolean = false;
  change = false;
  animationTrigger: boolean = false;
  ext: boolean = false;
  onclick: boolean = false;
  ingreServ: boolean;
  ingredients: String;
  main: String;
  recipes: any;
  number: number;
  diet: any = '';
  intol: any = '';
  exclude: any = '';

  constructor(
    private recipeService: RecipeService,
    private loadingScreenServ: LoadingAnimService
  ) {}

  ngOnInit() {
    this.loadingSub = this.loadingScreenServ.loadingStatus
      .pipe(debounceTime(200))
      .subscribe((value) => {
        this.loading = value;
      });
  }

  getByIngredients() {
    // this.ingredients = this.ingredients.replace(/\s/g, '');
    console.log(this.ingredients, this.number);
    this.recipeService
      .getByIngredient(this.ingredients, this.number)
      .subscribe((recipes) => {
        this.ingredients = '';
        this.loading = true;
        this.recipes = recipes;
        this.ingreServ = true;
        this.animationTrigger = !this.animationTrigger;
      });
    (error) => {
      console.log(error);
    };
  }

  getBySearch() {
    console.log(this.main);
    this.recipeService
      .getBySearch(this.main, this.number, this.diet, this.intol, this.exclude)
      .subscribe((recipes) => {
        this.ingreServ = false;
        this.main = '';
        this.loading = true;
        this.recipes = recipes;
        this.animationTrigger = !this.animationTrigger;
      });
    (error) => {
      console.log(error);
    };
  }

  ngOnDestroy() {
    this.loadingSub.unsubscribe();
  }

  changeSearch() {
    this.change = !this.change;
  }

  extra() {
    this.ext = true;
    this.onclick = !this.onclick;
  }
}
