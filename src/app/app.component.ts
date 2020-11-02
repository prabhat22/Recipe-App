import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     
  loadRoute:String="recipe";
  loadNavigation(data:String)
  {
    console.log("data in app comp:",data)
     this.loadRoute=data;
  }
}
