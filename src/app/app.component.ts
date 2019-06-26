import { Component } from '@angular/core';
import * as firebase from  'firebase';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
     
  loadRoute:String="recipe";
  ngOnInit()
  {
    firebase.initializeApp({
      apiKey: "AIzaSyDW0TJ3dnJ3D196uzZ2nvtyvoMy_-XmEj8",
      authDomain: "recipe-project-bb1a4.firebaseapp.com",
    })
  }
  loadNavigation(data:String)
  {
    console.log("data in app comp:",data)
     this.loadRoute=data;
  }
}
