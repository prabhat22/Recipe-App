import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {HeaderComponent} from './header/header.component';
import {ShoppingService} from './shopping-list/shopping.service';
import {RecipeService} from './recipes/recipe.service';
import {AppRoutingModule} from './app-routing.module';
import { DataService } from 'src/app/shared/data.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthGuard } from 'src/app/auth/auth-guard.service';
import { RecipeModule } from 'src/app/recipes/recipes.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingModule } from 'src/app/shopping-list/shopping.module';
import { HomeComponent } from './home/home.component';
import { AppInterceptor } from './shared/app.interceptor';

import { ShoppingListReducer } from './shopping-list/shopping.reducer';
 


@NgModule({
  declarations: [
    AppComponent,
     HeaderComponent,
     SignupComponent,
     SigninComponent,
     HomeComponent,
  
  ],
  imports: [
    BrowserModule.withServerTransition({appId:'my-app'}),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ShoppingModule,
    SharedModule,
   // StoreModule.forRoot({shoppingList:ShoppingListReducer})
  ],
  providers: [DataService,ShoppingService,RecipeService,AuthService,AuthGuard,
    {provide:HTTP_INTERCEPTORS,useClass:AppInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
