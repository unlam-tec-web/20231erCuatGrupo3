import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from "../../shared/models/Cart";
import { CartProduct } from "../../shared/models/CartProduct";

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  cart! : Cart;

  constructor(
    public cartService: CartService
  ) {
      this.cartService.getCartObservable().subscribe((cart) => {
        this.cart = cart;
      })
  }

  ngOnInit(): void {
  }

  removeFromCart(cartProduct:CartProduct){
  this.cartService.removeFromCart(cartProduct.product.id);
  }

  changeQuantity(cartProduct:CartProduct, quantityS:string){
    const quantity = parseInt(quantityS);
    this.cartService.changeQuantity(cartProduct.product.id,quantity);
  }

  decrementQuantity(cartProduct:CartProduct) : void {
    this.cartService.decrementQuantity(cartProduct.product.id);
  }

  incrementQuantity(cartProduct:CartProduct) : void {
    this.cartService.incrementQuantity(cartProduct.product.id);
  }

  onQuantityChange(cartProduct:CartProduct) {
    let productInCart= this.cart.items
      .find(items => items.product.id === cartProduct.product.id);
    if(!productInCart)
      return;

    console.log(this.cart.items
    [this.cart.items.
    findIndex(p => p.product.id === cartProduct.product.id)].quantity);
    //console.log(productInCart.price);
  }

  getTotalFromProductsInCart(){
    return this.cartService.getTotalFromProductsInCart();
  }

  getTotalCost(){
    return this.cartService.getTotalCost();
  }

  getTotalProductCost(cartProduct:CartProduct){
    return this.cartService.getProductTotalCost(cartProduct);
  }

}
