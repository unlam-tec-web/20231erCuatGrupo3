import {SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user?: SocialUser;
  loggedIn: boolean | undefined;
  rightPanelClass : boolean = false;
  emailValidator :string = ('[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$')
  
  constructor(private authService: SocialAuthService,
    private fb:FormBuilder) {}

  ngOnInit() { 
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
  }
  
  loginForm = this.fb.group({
    email:  ['',[Validators.required]],
    password: ['',[Validators.required]],
  });

  registerForm = this.fb.group({
    nombre:['',[Validators.required]],
    emailRegistro:['',[Validators.required,Validators.pattern(this.emailValidator)]],
    passwordRegistro:['',[Validators.required]],
  });

  get LoginForm(){
    return this.loginForm.controls;
  }

  get RegisterForm(){
    return this.registerForm.controls;
  }

  
}
