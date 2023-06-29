import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import {Injectable } from '@angular/core';
import { USER_LOGIN, USER_REGISTERURL, USER_VERIFICATE } from '../shared/constants/urls';
import { User } from 'src/assets/interfaces/user.interface';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/assets/interfaces/userLogin.interface';
import { UserVerification } from 'src/assets/interfaces/userVerification.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor(
    private authService: SocialAuthService,
    public httpClient:HttpClient
  )
  { }

registrarUsuario(user:User) :Observable<any>{
  return this.httpClient.post<any>(USER_REGISTERURL,user);
}

 loguearUsuario(user:UserLogin) :Observable<any>{
   return this.httpClient.post<any>(USER_LOGIN,user);
  }

  cargarDatosDeSesion(usuario:string){
    const usuarioLogueado = localStorage.setItem('USUARIOLOGUEADO',usuario);
  }

verificarCodigo(user:UserVerification){
  return this.httpClient.post<any>(USER_VERIFICATE,user);
}

  obtenerUsuarioDeLaSesion() : Promise<SocialUser | null> {
    const usuarioString = localStorage.getItem('USUARIO')

    if (usuarioString !== null) {
      const usuario: SocialUser = JSON.parse(usuarioString);
      return Promise.resolve(usuario);
    } else {
      return new Promise((resolve) => {

        //Tenemos que utilizar la promesa por un tema de que this.authService.authState es asincrono y no sabemos cuando devuelve el valor antes del redireccionamiento
        this.authService.authState.subscribe((user) => {
          if (user) {
            localStorage.setItem('USUARIO', JSON.stringify(user));
            return resolve(user);
          }
        });
      });
    }
  }

  borrarSesion(){
    localStorage.removeItem('USUARIO');
    localStorage.removeItem('USUARIOLOGUEADO')
    const sesionCerrada=this.authService.signOut()

  }
}
