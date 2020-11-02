import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import {RecipeService} from './recipe.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[]
})
export class RecipesComponent implements OnInit {

  selectedRecipe:Recipe;
  constructor(private route:Router,private activeRoute:ActivatedRoute,private recipeService:RecipeService) 
  {
        console.log("recipe comp call")
  }
 
 
  ngOnInit() 
  { this.recipeService.recipeSelected.subscribe(
    
      (recipe:Recipe)=>
      {
        
        this.selectedRecipe=recipe;
        console.log("sel reci  is:",this.selectedRecipe)
      }
    
  )
  } 
  addRecipe()
  {
   this.route.navigate(['new'],{relativeTo:this.activeRoute});
  }

}
