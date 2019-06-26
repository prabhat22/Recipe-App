import * as ShoppingAction from './shopping.action'
import { Ingredient } from '../shared/ingredient-model';




const initialState=
{
    ingredients:
    [
      new Ingredient('Apples',5),
      new Ingredient('Tomatos',10)  
    ]
};

export function ShoppingListReducer(state=initialState,action:ShoppingAction.ShoppingAction)
{
   switch(action.type)
   {
       case  ShoppingAction.ADD_ING:
           return
           {  
               
           };
           default:
                return state;

   }

  
}