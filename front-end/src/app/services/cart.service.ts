import { Injectable } from '@angular/core';
import { Cart } from '../../assets/interfaces/cart.interface';
import { Product } from 'src/assets/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart[] = [];

  constructor() { }

  agregarAlCarrito(product: Product, quantity:number): void {
    const newCart: Cart = {
      id: product.id,
      type: product.type,
      name: product.name,
      details: product.details,
      description: product.description,
      brand: product.brand,
      price: product.price,
      img: product.img,
      quantity: quantity,
      totalPrice: quantity * product.price
    };

    // Verifica si el producto ya está en el carrito
    const productInCart = this.cart.find(p => p.id === newCart.id);

    if (productInCart) {
      // Si el producto ya está en el carrito, actualiza su cantidad
      productInCart.quantity= quantity + productInCart.quantity;
    } else {
      // Si el producto no está en el carrito, agrégalo
      this.cart.push(newCart);
    }
  }


  removeProductFromCart(producto: Cart): void {
    const productInCart = this.cart.find(p => p.id === producto.id);
    if (productInCart) {
      const index = this.cart.findIndex(p => p.id === producto.id);
      this.cart.splice(index, 1);
    }
  }


  actualizarCantidad(producto: Cart, cantidad: number): void {
    const productInCart = this.cart.find(p => p.id === producto.id);

    if (productInCart) {
      // Si el producto ya está en el carrito, actualiza su cantidad
      producto.quantity = cantidad;
      this.cart.push(producto);
    }
  }
  getSubtotal(): number {
    let subtotal = 0;
    this.cart.forEach(product => {
      subtotal += product.price * product.quantity;
    });
    return subtotal;
  }

  obtenerTotal(): number {
    let total = 0;
    let deliveryCost = 400;
    this.cart.forEach(product => {
      const subtotal = product.price * product.quantity;
      total += subtotal;
    });

    return total+deliveryCost;
  }

  getCart(): Cart[] {
    return this.cart;
  }

  decrementQuantity(product: Cart) : void {
    const productInCart = this.cart.find(p => p.id === product.id);
    if (productInCart) {
    if (product.quantity > 1) {
      product.quantity--;
    }
   }
  }

  incrementQuantity(product: Cart) : void {
    const productInCart = this.cart.find(p => p.id === product.id);
    if (productInCart) {
    if (product.quantity >= 1) {
      product.quantity++;
    }
  }
}



}

