import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import {Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor(private authService: SocialAuthService) { }

  obtenerUsuarioDeLaSesion() : Promise<SocialUser | null> {
    const usuarioString = localStorage.getItem('USUARIO')

    if (usuarioString !== null) {
      const usuario: SocialUser = JSON.parse(usuarioString);
      return Promise.resolve(usuario);
    } else {
      return new Promise((resolve, reject) => {
        
        //Tenemos que utilizar la promesa por un tema de que this.autService.authState es asincrono y no sabemos cuando devuelve el valor antes del redireccionamiento
        this.authService.authState.subscribe((user) => {
          if (user) {
            localStorage.setItem('USUARIO', JSON.stringify(user));
            resolve(user);
          } else {
            reject(null);
          }
        });
      });
    }
  }
}
