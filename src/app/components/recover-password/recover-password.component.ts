import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})

export class RecoverPasswordComponent {

  emailValidator  = new RegExp(/[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  userEmail= new FormControl('',[Validators.required, Validators.email, Validators.pattern(this.emailValidator)]);

}
