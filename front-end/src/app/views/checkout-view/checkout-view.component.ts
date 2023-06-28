import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import {Cart} from 'src/assets/interfaces/cart.interface';
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout-view',
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.css']
})
export class CheckoutViewComponent implements OnInit{

  public cart: Cart []=[];

  constructor(
    public cartService: CartService,
    public userService: UserService,
    protected router:Router,
  ){}

  ngOnInit(): void {
    this.cart=this.cartService.getCart();
  }

  public confirmarCompra(){
    this.cartService.vaciarCarrito();
    this.router.navigate(['/order-confirmation']);
  }

  public getPrecio(producto: Cart){
    this.cartService.obtenerPrecioPorCantidad(producto);
  }
  public getSubtotal(){
    this.cartService.getSubtotal();
  }

}
