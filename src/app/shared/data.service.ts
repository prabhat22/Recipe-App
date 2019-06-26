import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams, HttpRequest } from '@angular/common/http';
import { RecipeService } from 'src/app/recipes/recipe.service';

import  'rxjs/Rx';
import { Recipe } from 'src/app/recipes/recipe.model';
import { AuthService } from 'src/app/auth/auth.service';


@Injectable()
export class DataService
{
    constructor(private http:HttpClient,private recipeService:RecipeService,private authService:AuthService){}

    storeRecipe()
    {
      //  console.log(this.recipeSerivce.getRecipeList())
         const tk=this.authService.getToken();
         console.log("tk is:",tk )
        //  return this.http.put('https://recipe-project-bb1a4.firebaseio.com/recipes.json',this.recipeService.getRecipeList(),
        //  {
        //    params:new HttpParams().set('auth',tk)
        //  });
        const req=new HttpRequest('PUT','https://recipe-project-bb1a4.firebaseio.com/recipes.json',this.recipeService.getRecipeList(),{reportProgress:true})
         return this.http.request(req);

    }
    fetchRecipe()
    {
        const tk=this.authService.getToken();
        console.log("tk is:",tk )
        return this.http.get('https://recipe-project-bb1a4.firebaseio.com/recipes.json?auth='+tk).map(
            (response:Recipe[])=>
            {
                console.log("response is:",response);
                const recipes:Recipe[]=response;
                for(let record of response)
                {
                    if(!record['ingredients'])
                    {
                        console.log("no ing")
                    }
                }
              return recipes;
            }
        )
        .subscribe(
            (recipes:Recipe[])=>
            {
              this.recipeService.updateRecipeList(recipes);
              
            }
          );
    }
}