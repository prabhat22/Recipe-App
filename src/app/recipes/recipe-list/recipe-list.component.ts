import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList:Recipe[];

 // @Output() recipeWasSelected=new EventEmitter<Recipe>();

  constructor(private recipeService:RecipeService) 
  {
      console.log("recipe list is")
  }
  ngOnInit()
   {
    this.recipeService.recipeChanged.subscribe(
      (recipe:Recipe[])=>
      {
        this.recipeList=recipe;
      }
    )
       this.recipeList=this.recipeService.getRecipeList();
    }
     
   
  //    showRecipeItemDetail(result:Recipe)
  //  {
  //        this.recipeWasSelected.emit(result);
  //        console.log("rec detail recieved is:",result);
  //   }
       addRecipe()
       {
         console.log("recipe add call")
       }

 

}
