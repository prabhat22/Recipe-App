import { Ingredient } from 'src/app/shared/ingredient-model';

import { Output} from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ShoppingService 
{
 ingListChanged =new Subject<Ingredient[]>();
 startedEditing=new Subject<number>();
  private ingredientList:Ingredient[]=
    [
      new Ingredient('Apples',5),
      new Ingredient('Tomatos',10)  
    ];
    getIngList()
    {
        return this.ingredientList.slice();
    }
    addIng(record:Ingredient)
    {
        console.log("record rec is:",record)
        this.ingredientList.push(record);
        this.ingListChanged.next(this.ingredientList);
    }
    getIng(i:number)
    {
        return this.ingredientList[i];
    }
    updateIng(index,record)
    {
        this.ingredientList[index].name=record.name;
        this.ingredientList[index].amount=record.amount;
        this.ingListChanged.next(this.ingredientList);
    }
    deleteIng(index)
    {
        console.log("index is:",index)
        this.ingredientList.splice(index,1);
        this.ingListChanged.next(this.ingredientList);
    }
}