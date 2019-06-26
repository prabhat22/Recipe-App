import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  submit(form:NgForm)
  {

    const email=form.value.email;
    const pwd=form.value.password;
    console.log(email,pwd);
    this.authService.signIn(email,pwd);
  }

}
