import { Component, Output,EventEmitter } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Response } from 'selenium-webdriver/http';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { AuthService } from 'src/app/auth/auth.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  
})
export class HeaderComponent {
 
//   @Output() loadRoute=new EventEmitter<String>();
//  changeNavigation(data)
//  {
//       console.log("route in header is:",data);
//       this.loadRoute.emit(data);
//  }
constructor(private dataService:DataService,private recipeService:RecipeService,private authService:AuthService)
{}
onSave()
{
  this.dataService.storeRecipe().subscribe(
    (response)=>
    {
      console.log("response is:",response);
    },
    (error:Response)=>
    {
      console.log("err is:",error);
    }
  )
}
onFetch()
{
  this.dataService.fetchRecipe()
}

onLogout()
{
  this.authService.logout();
}


}
