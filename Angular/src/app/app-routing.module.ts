import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './comp/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './comp/recipe-details/recipe-details.component';

const routes: Routes = [
  { path: 'recipes', component: RecipeListComponent},
  { path: 'recipe/:id', component: RecipeDetailsComponent},
  { path: '', redirectTo: 'recipes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
