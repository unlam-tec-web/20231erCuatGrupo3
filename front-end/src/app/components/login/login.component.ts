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
  emailValidator  = new RegExp(/[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  
  //Expresion regular que verifica que contenga al menos un numero, una mayuscula, caracter especial
  passwordValidator =new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/gm)
  
  constructor(private authService: SocialAuthService,
    private fb:FormBuilder) {}

  ngOnInit() { 
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
  }

  resetarFormulario(){
    this.registerForm.clearValidators()
    this.registerForm.reset();
  }
 
  loginForm = this.fb.group({
    email:  ['',[Validators.required]],
    password: ['',[Validators.required]],
  });

  registerForm = this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3)]],
    apellido:['',[Validators.required,Validators.minLength(3)]],
    direccion:['',[Validators.required,Validators.minLength(3)]],
    emailRegistro:['',[Validators.required,Validators.pattern(this.emailValidator)]],
    passwordRegistro:['',[Validators.required,Validators.pattern(this.passwordValidator)]],
  });

}
