import {Recipe} from '../recipes/recipe.model';
import { Output,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient-model';
import { forEach } from '@angular/router/src/utils/collection';
import { Subject } from 'rxjs/internal/Subject';

export class RecipeService
{
    @Output() recipeSelected=new Subject<Recipe>();
    @Output() recipeChanged=new Subject<Recipe[]>();
   private  recipeList:Recipe[]=[
        new Recipe('test recipe1',"this is to test","https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/uh59Wh0/fast-food-cartoon-illustration-hand-drawn-animation-transparent_v1pm904__S0004.jpg",
        [
            new Ingredient('ing 1',10),
            new Ingredient('ing 2',19)
        ]),
    
        new Recipe('test recipe2',"this is to test","https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/uh59Wh0/fast-food-cartoon-illustration-hand-drawn-animation-transparent_v1pm904__S0004.jpg",
        [
            new Ingredient('ing 1',20),
            new Ingredient('ing 2',29)
        ])
      ];
      getRecipeList()
      {
          return this.recipeList.slice();// slice return the copy of recipe list any chnnge done in this will not reflect to original recipe list
      }
      getRecipe(id:number)
      {
         return this.recipeList[id];
      }
      addRecipe(recipe:Recipe)
      {
          this.recipeList.push(recipe);
          this.recipeChanged.next(this.recipeList.slice());
      }
      updateRecipe(index,recipe)
      {
          this.recipeList[index]=recipe;
          this.recipeChanged.next(this.recipeList.slice());
      }
      deleteRecipe(index)
      {
          console.log("delete call")
          this.recipeList.splice(index,1);
          this.recipeChanged.next(this.recipeList.slice());

      }
}