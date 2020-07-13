import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:8887/';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getByIngredients (ingredients){
    return this.http.get(`${baseUrl}?ingredients=${ingredients}`)
  }
}
