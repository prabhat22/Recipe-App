import * as firebase from "firebase";
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthService
{
    constructor(private router:Router){}
     token:string=null;
    signUp(email:string,pwd:string)
    {
     firebase.auth().createUserWithEmailAndPassword(email,pwd).catch(
         err=>console.log(err)
     )
    }
    signIn(email:string,pwd:string)
    {
        console.log("sign in call")
        firebase.auth().signInWithEmailAndPassword(email,pwd).then(
          
           
            (response)=>{
                this.router.navigate(['/'])
                firebase.auth().currentUser.getIdToken().then((data:string) =>
                {
                    console.log("data is:",data);
                    this.token=data;
                   
                }
                )}
        ).catch(
            error=>console.log(error)
        )
    }
    getToken()
    {
        firebase.auth().currentUser.getIdToken().then(
            (token:string)=>
                {
                    this.token=token;
                }
               
        )
        return this.token;
    }
    isAuthenticated()
    {
    
        return this.token!=null;
        
    }
    logout()
    {
        console.log("logout call");
        firebase.auth().signOut();
        this.router.navigate(['/'])
        this.token=null;
        console.log("tokn logout is:",this.token)
    }
}