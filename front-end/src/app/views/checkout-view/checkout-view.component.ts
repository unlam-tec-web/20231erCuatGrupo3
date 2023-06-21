import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import {Cart} from 'src/assets/interfaces/cart.interface';
@Component({
  selector: 'app-checkout-view',
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.css']
})
export class CheckoutViewComponent implements OnInit{

  public cart: Cart []=[];

  constructor(public cartService: CartService){}

  ngOnInit(): void {
    this.getCarrito();
  }
  public getCarrito(){
    this.cart=this.cartService.getCart();
  }

  public getPrecio(producto: Cart){
    this.cartService.obtenerPrecioPorCantidad(producto);
  }
  public getSubtotal(){
    this.cartService.getSubtotal();
  }
}
