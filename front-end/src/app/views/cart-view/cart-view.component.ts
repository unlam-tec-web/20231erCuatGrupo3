import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from 'src/assets/interfaces/cart.interface';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  cart : Cart[] = []; // Verifica que esta propiedad esté declarada y definida correctamente

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  decrementQuantity(producto: Cart) : void {
    this.cartService.decrementQuantity(producto);
  }

  incrementQuantity(producto: Cart) : void {
    this.cartService.incrementQuantity(producto);
  }

  onQuantityChange(id: number) {
    console.log(this.cart[this.cart.findIndex(p => p.id === id)].quantity);
  }

  removeProductFromCart(producto: Cart): void {
    this.cartService.removeProductFromCart(producto);
  }

}
