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
  recipe:any = [{
    title:"BOCA Stuffed Mushrooms Appetizer",
    image:'https://spoonacular.com/recipeImages/270871-556x370.jpg',
    instructions:'Heat oven to 400F. Remove mushroom stems; set caps aside.  Chop stems; place in medium bowl.  Add remaining ingredients; mix well.                                            Fill mushroom caps with crumbles mixture; press firmly into caps.  Place on baking sheet.                                            Bake 10 to 12 min. or until mushrooms are tender and filling is heated through (160F).',
    summary:'BOCA Stuffed Mushrooms Appetizer might be just the hor doeuvre you are searching for. This recipe serves 22. For <b>10 cents per serving</b>, this recipe <b>covers 1%</b> of your daily requirements of vitamins and minerals. One serving contains <b>13 calories</b>, <b>1g of protein</b>, and <b>1g of fat</b>. From preparation to the plate, this recipe takes around <b>22 minutes</b>. It is a good option if youre following a <b>gluten free</b> diet. This recipe is liked by 1 foodies and cooks. If you have milk cheddar cheese, boca veggie ground crumbles, green onion, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe <b>deserves a spoonacular score of 15%</b>. This score is rather bad. Similar recipes include <a href="https://spoonacular.com/recipes/appetizer-stuffed-mushrooms-390161">Appetizer Stuffed Mushrooms</a>, <a href="https://spoonacular.com/recipes/a-quick-appetizer-mediterranean-stuffed-mushrooms-502145">A quick appetizer: Mediterranean Stuffed Mushrooms</a>, and <a href="https://spoonacular.com/recipes/cassarinos-vegetable-stuffed-mushrooms-these-are-a-light-and-healthy-appetizer-everyone-will-love-600484">Cassarino’s Vegetable Stuffed Mushrooms – these are a light and healthy appetizer everyone will love</a>.'
  }];





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
    // this.getRecipe(this.route.snapshot.paramMap.get('id'));

  }

  // getRecipe(id){
  //   this.recipeService.getRecipe(id).subscribe(
  //     (recipe) => {
  //       this.loading = true;
  //       this.recipe = [recipe];
  //       console.log(recipe)
  //     }
  //   )
  // }

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
