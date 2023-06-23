import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/assets/interfaces/user.interface';
import { UserLogin } from 'src/assets/interfaces/userLogin.interface';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Swal: any;
  rightPanelClass : boolean = false;
  emailValidator  = new RegExp(/[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  
  //Expresion regular que verifica que contenga al menos un numero, una mayuscula, caracter especial
  passwordValidator =new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/gm)
  
  constructor(
    private fb:FormBuilder,private userServices: UserService,
    private router:Router) {}

    ngOnInit(): void {
      
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
    _id:[''],
    nombre:['',[Validators.required,Validators.minLength(3)]],
    apellido:['',[Validators.required,Validators.minLength(3)]],
    direccion:['',[Validators.required,Validators.minLength(3)]],
    emailRegistro:['',[Validators.required,Validators.pattern(this.emailValidator)]],
    passwordRegistro:['',[Validators.required,Validators.pattern(this.passwordValidator)]],
  });
 
  validarUsuario(){
    const {email,password} = this.loginForm.controls
    const user :UserLogin = {
      email:email.value,
      password:password.value
    }

    return this.userServices.loguearUsuario(user).subscribe((response) =>{
      
      const usuarioString = JSON.stringify(response.usuario);
      this.userServices.cargarDatosDeSesion(usuarioString);

      Swal.fire("Inicio de sesión exitoso",response.mensaje,'success');
      setTimeout(() => this.router.navigateByUrl('/'),3000);
    },
    (error) => {
      if(error.status == 401){
        console.log("Error",error)
        Swal.fire("Error al iniciar sesión",error.error.mensaje,'error');
        console.log(error.status)
      }else{
        console.log(error)
        Swal.fire(
          "Se ha producido un error, por favor intente mas tarde",
          "error"
        );
      }
    }
    );
  }

  registrarUsuario(){
    const {nombre,apellido,direccion,emailRegistro,passwordRegistro} = this.registerForm.controls
    
      const user:User = {
        _id: null,
        name: nombre.value,
        apellido:apellido.value,
        direccion:direccion.value,
        emailRegistro:emailRegistro.value,
        passwordRegistro:passwordRegistro.value  
    }
      
 return this.userServices.registrarUsuario(user).subscribe((response) =>{
       Swal.fire("Registro exitoso",response.mensaje,'success');
       this.rightPanelClass = false;
       this.resetarFormulario();
    
 },
 (error) =>{
  if(error.status == 500){
    console.log("Error",error)
    Swal.fire("Error al registrar usuario",error.error.mensaje,'error');
    console.log(error.status)
  }else{
    console.log(error)
    Swal.fire(
      "Se ha producido un error, por favor intente mas tarde",
      "error"
    );
  }
 });

}

}
