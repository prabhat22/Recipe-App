import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient-model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[]
})
export class ShoppingListComponent implements OnInit {

  // ingredientList:Ingredient[]=
  // [
  //   new Ingredient('Apples',5),
  //   new Ingredient('Tomatos',10)  
  // ];
  ingredientList:Ingredient[];
 
  constructor(private shoppingService:ShoppingService) 
  {
      console.log("shopping list call and ingredieint list is:",this.ingredientList);
  }
  ngOnInit() {
    this.ingredientList= this.shoppingService.getIngList();
    this.shoppingService.ingListChanged.subscribe(
      (record:Ingredient[])=>
      {
        this.ingredientList=this.shoppingService.getIngList();
      }
    )
   }
   onEdit(index:number)
   {
     this.shoppingService.startedEditing.next(index);
   }
 
  // ingAdd(record:Ingredient)
  // {
  //  console.log("ing rec is:",record)
  //  this.ingredientList.push(record);
  // }

  

}
