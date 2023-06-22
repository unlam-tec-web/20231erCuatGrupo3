import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import {Cart} from 'src/assets/interfaces/cart.interface';

@Component({
  selector: 'app-checkout-view',
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.css']
})
export class CheckoutViewComponent implements OnInit{

  public cart: Cart []=[];
 //user

  constructor(public cartService: CartService, public userService: UserService){}

  ngOnInit(): void {
    this.cart=this.cartService.getCart();
  }
 

  public getPrecio(producto: Cart){
    this.cartService.obtenerPrecioPorCantidad(producto);
  }
  public getSubtotal(){
    this.cartService.getSubtotal();
  }
  public comprarProducto(){
    //this.cartService.vaciarCarrito();
    //this.cartService.comprarProducto(this.cart, this.user.id);
    //redirigir a perfil y mostrar todos los pedidos
  }
}
