import { NgModule } from '@angular/core';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingEditComponent } from '../shopping-list/shopping-edit/shopping-edit.component'
import { AuthGuard } from 'src/app/auth/auth-guard.service';
import { RouterModule } from '@angular/router';

const routes=[ { 
    path:"shoppingList",
    component:ShoppingListComponent,
    canActivate:[AuthGuard]
 }];
 @NgModule(
     {
         imports:[RouterModule.forChild(routes)],
         exports:[RouterModule]
     }
 )
export class ShoppingRoute
{

}