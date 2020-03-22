import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A test recipe", "This is a text", "https://img.itdg.com.br/tdg/images/recipes/000/001/545/282163/282163_original.jpg"),
    new Recipe("A test recipe", "This is a text", "https://img.itdg.com.br/tdg/images/recipes/000/001/545/282163/282163_original.jpg")

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
