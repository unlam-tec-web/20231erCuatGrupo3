import { Injectable } from '@angular/core';
import { Cart } from '../../assets/interfaces/cart.interface';
import { Product } from 'src/assets/interfaces/product.interface';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public productList = new BehaviorSubject<any>([]);
  private cart: Cart[] = [];
  constructor(private _snackBar: MatSnackBar) { }



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
      this.productList.next(this.cart);
      this._snackBar.open('¡Producto agregado al carrito!', 'Ok', { duration: 3000 });

    }
  }


  removeProductFromCart(producto: Cart): void {
    const productInCart = this.cart.find(p => p.id === producto.id);
    if (productInCart) {
      const index = this.cart.findIndex(p => p.id === producto.id);
      this.cart.splice(index, 1);
    }
    this.productList.next(this.cart);
    this._snackBar.open('Producto eliminado del carrito.', 'Ok', {
      duration: 3000,
    });
  }


  actualizarCantidad(producto: Cart, cantidad: number): void {
    const productInCart = this.cart.find(p => p.id === producto.id);

    if (productInCart) {
      // Si el producto ya está en el carrito, actualiza su cantidad
      producto.quantity = cantidad;
      this.cart.push(producto);
      this.productList.next(producto);
      
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
  getProductosEnCarrito(){
  return this.productList.asObservable();
}
  vaciarCarrito(){
  this.cart = []
  this.productList.next(this.cart);
}

obtenerPrecioPorCantidad(producto: Cart): number{
  let subtotal = 0;
  const productoExistente = this.cart.find(p => p.id === producto.id);
  if (productoExistente) {
    subtotal=productoExistente.quantity*productoExistente.price;
   }

  return subtotal;
}
}
