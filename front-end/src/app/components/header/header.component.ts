import { SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public totalItem : number = 0;
user: SocialUser | null =null  ;
loggedIn: boolean = false;
constructor(private userServices:UserService,private router:Router, private cartService:CartService
  ){ }

ngOnInit() {
this.obtenerUsuario();
//this.totalItem=this.cartService.obtenerCarrito().length;
this.cartService.getProductosEnCarrito()
.subscribe(res=>{
  this.totalItem = res.length;
})
}

async obtenerUsuario(){
  this.user = await this.userServices.obtenerUsuarioDeLaSesion();
  this.loggedIn = this.user !=null 
}

borrarSesion(){
  this.userServices.borrarSesion();
  this.loggedIn=false;
  this.user=null;
  this.router.navigateByUrl('/')
}

}