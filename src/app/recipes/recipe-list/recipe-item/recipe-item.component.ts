import { Component,Input, Output, EventEmitter  } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { element } from 'protractor';
import { RecipeService } from 'src/app/recipes/recipe.service';



@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent  {

  @Input() element:Recipe;
  @Input() index:number;
  // @Output() recipeItemDetail=new EventEmitter<void>();
  constructor(private recipeSerivce:RecipeService)
   {
     console.log("recipe item comp call")
    }

    // showRecipeDetail()
    // {
    //   console.log(this.element);
    //   this.recipeSerivce.recipeSelected.emit(this.element);
    //   //this.recipeItemDetail.emit();
    //   console.log("show recipe  detail call")
    // }
 

}
