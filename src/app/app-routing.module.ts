import {Routes,RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { SigninComponent } from 'src/app/auth/signin/signin.component';
import { HomeComponent } from 'src/app/home/home.component';
import { PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';



const route:Routes=
[
    { 
        path:"",
       component:HomeComponent
     },
     { 
        path:"recipes",
        loadChildren:'./recipes/recipes.module#RecipeModule',
        canActivate:[AuthGuard]
        
     },
   { 
    path:"signup",
    component:SignupComponent
 },
 { 
    path:"signin",
    component:SigninComponent
 },
 
];
@NgModule(
    {
        imports:[RouterModule.forRoot(route,{preloadingStrategy:PreloadAllModules})
        ],
        exports:[RouterModule]
    }
)
export class AppRoutingModule
{

}