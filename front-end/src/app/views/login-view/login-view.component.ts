import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit{

  usuario: SocialUser | null =null  ;
  constructor(private userServices:UserService,private router:Router){}
 
  ngOnInit() {
   
    this.userServices.obtenerUsuarioDeLaSesion()
      .then((usuario) => {
        if (usuario) {
          this.router.navigateByUrl('/');
        } else {
          this.router.navigateByUrl('/login');
        }
      })
      .catch((error) => {
        console.log('Error al obtener el usuario:', error);
      });
  }
 
  }
  
