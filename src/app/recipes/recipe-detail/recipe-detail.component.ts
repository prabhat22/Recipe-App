import { Component, OnInit,Input} from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

 // @Input()  recipe:Recipe;
 recipe:Recipe;
 id:number;

  constructor(private router:Router,private activeRoute:ActivatedRoute,private recipeService:RecipeService) {
    // console.log("id is:",this.activeRoute.snapshot.params['id']);
   }

  ngOnInit() {
    console.log("id is:",this.activeRoute.snapshot.params['id']);
    this.id=this.activeRoute.snapshot.params['id'];
   this.activeRoute.params.subscribe(
     (params:Params)=>
     {
       this.recipe=this.recipeService.getRecipe(+params['id']);
     }
   )
  }
  deleteRecipe()
  {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes'])
  }
  edit()
  {
  this.router.navigate(['edit'] ,{relativeTo:this.activeRoute});
  }
  shoppingList()
{
  this.router.navigate(['shoppingList'])
}
}
