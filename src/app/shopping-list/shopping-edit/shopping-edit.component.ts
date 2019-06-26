import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient-model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ViewChild } from '@angular/core';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  subscription:Subscription;
  editMode=false;
  editIndex:number;
  @ViewChild('f') form:NgForm;
  constructor(private shoppingService:ShoppingService) { console.log("shopping edit call");}
  ngOnInit()
   {
        this.subscription=this.shoppingService.startedEditing.subscribe(
          (index:number)=>
          {
            this.editMode=true;
            this.editIndex=index;
            this.form.setValue(
              {
                name:this.shoppingService.getIng(index).name,
                amount:this.shoppingService.getIng(index).amount
              }
            )

          }
        )
  }


  // @Output() ingredientAdded=new EventEmitter<Ingredient>();
  
  // addIngredient(name,amount)
  // {
  //   console.log("name and amount is:",name.value,amount.value)
  //   var obj:Ingredient=new Ingredient(name.value,amount.value);
  //   console.log("ing obj is:",obj);
  //   this.shoppingService.addIng(obj);
  //   //this.ingredientAdded.emit(obj);

  // }
  
  onSubmit(form:NgForm)
  {
    form=form.value;
    console.log("name and amount is:",form.name,form.amount)
    var obj:Ingredient=new Ingredient(form.name,form.amount);
    console.log("ing obj is:",obj);
    if(this.editMode)
    {
      this.shoppingService.updateIng(this.editIndex,obj)

    }
    else
    {
      this.shoppingService.addIng(obj);
    }
    this.editMode=false;
    this.form.reset();

    
    //this.ingredientAdded.emit(obj);

  }
  onClear()
  {
    this.form.reset();
    this.editMode=false;
  }
  onDelete()
  {
   
    this.shoppingService.deleteIng(this.editIndex);
    this.form.reset();

  }
  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

  
}
