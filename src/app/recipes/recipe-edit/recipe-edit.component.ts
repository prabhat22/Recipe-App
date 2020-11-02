import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number;
  editMode:boolean;
  recipeForm:FormGroup;
  constructor(private route:ActivatedRoute,private recipeService:RecipeService,private router:Router) { }

  ngOnInit()
   {
    
   this.route.params.subscribe(
     (params:Params)=>
     {
       this.id=+params['id'];
       this.editMode=params['id'] != null;
       console.log(this.editMode);
       this.initForm();
     }
   )
     
  }


  private initForm()
  {
    let recipeName:String="";
    let recipeImgPath:String="";
    let recipeDesc:String="";
    let ingredientsArr=new FormArray([]);
    if(this.editMode)
    {
      const recipe=this.recipeService.getRecipe(this.id);

       recipeName=recipe.recipeName
       recipeImgPath=recipe.recipeImgPath;
       recipeDesc=recipe.recipeDesc;
       if(recipe['ingredients'])
       {
         console.log("under rec ing")
         for(let record of recipe.ingredients)
         {
           console.log('record is:',record)
           ingredientsArr.push(new FormGroup(
             {
               'name':new FormControl(record.name,Validators.required),
               'amount': new FormControl(record.amount,Validators.pattern(/^[1-9]+[0-9]*$/))
             }
           ))
         }
         console.log("ing arr is:",ingredientsArr.value)
       }
    }
    this.recipeForm=new FormGroup(
      {
        'name': new FormControl(recipeName,Validators.required),
        'desc':new FormControl(recipeDesc,Validators.required),
        'imgPath':new FormControl(recipeImgPath,Validators.required),
        'ingredient':ingredientsArr,
      }
    )

  }
  addIng()
  {
    (<FormArray>this.recipeForm.get('ingredient')).push(
      new FormGroup(
        {
          'name':new FormControl(null,Validators.required),
          'amount':new FormControl(Validators.pattern(/^[1-9]+[0-9]*$/))
        }
      )
    )
  }
  cancelRecipe()
  {

    this.router.navigate(["../"]);
  }
  onSubmit()
  {
    const newRecipe=new Recipe(this.recipeForm.value['name'],this.recipeForm.value['desc'],this.recipeForm.value['imgPath'],this.recipeForm.value['ingredient']);
    if(this.editMode)
    {
      this.recipeService.updateRecipe(this.id,newRecipe);
    }
    else
    {
      this.recipeService.addRecipe(newRecipe);
    }
    this.cancelRecipe();
  }

  removeIng(index)
  {
   (<FormArray> this.recipeForm.get('ingredient')).removeAt(index)
  }
}
