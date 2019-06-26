import { NgModule } from '@angular/core';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeListComponent } from '../recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from '../recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from 'src/app/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from 'src/app/recipes/recipe-edit/recipe-edit.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuard } from 'src/app/auth/auth-guard.service';
import { RouterModule } from '@angular/router';




const routes=[
    {
        path:"",
        component:RecipesComponent,
        children:
        [
            
            {
             path:'',
             component:RecipeStartComponent,
            },
            {
             path:'new',
             component:RecipeEditComponent,
             canActivate:[AuthGuard]
            },
            {
             path:':id/edit',
             component:RecipeEditComponent,
             canActivate:[AuthGuard]
            },
            {
             path:':id',
             component:RecipeDetailComponent,
             canActivate:[AuthGuard]
            }
        ]
 
   
    },
]
@NgModule(
    {
      imports:[
          RouterModule.forChild(routes),
      ],
      exports:[RouterModule]
    }
)
export class RecipeRoutingModule
{

}