import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserVerification } from 'src/assets/interfaces/userVerification.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verification-code-view',
  templateUrl: './verification-code-view.component.html',
  styleUrls: ['./verification-code-view.component.css']
})
export class VerificationCodeViewComponent {
  Swal: any;
  emailValidator  = new RegExp(/[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  constructor(private fb:FormBuilder,private userServices: UserService,
    private router:Router){}

  verificationForm = this.fb.group({
    email:  ['',[Validators.required,Validators.pattern(this.emailValidator)]],
    codigo: ['',[Validators.required]],
  });



verificarCodigo(){
  const {email,codigo}= this.verificationForm.controls;
  const usuario:UserVerification = {
    email:email.value,
    codigo:codigo.value
  }
return this.userServices.verificarCodigo(usuario).subscribe((response) =>{
  Swal.fire("Inicio de sesión exitoso",response.mensaje,'success')
  .then((result) => {
    //isConfirmed metodo de Swal que verifica cuando clickeaste el boton de ok
    if(result.isConfirmed){
      this.router.navigateByUrl("/login");
    }
  });
},(error) =>{
  Swal.fire(
    "Se ha producido un error, por favor intente mas tarde",
    "error"
  );
});
}

}
