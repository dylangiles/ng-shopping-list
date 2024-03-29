import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

const TEMPLATE_IMAGE =
  'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', TEMPLATE_IMAGE),

    new Recipe(
      'Another test recipe',
      'This is simply another test recipe',
      TEMPLATE_IMAGE
    ),
  ];

  ngOnInit() {}
}
