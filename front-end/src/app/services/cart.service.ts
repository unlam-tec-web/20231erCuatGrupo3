import { Injectable } from '@angular/core';
import { ProductosCart } from '../../assets/interfaces/productosCart.interface';
import { Product } from 'src/assets/interfaces/product.interface';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public productList = new BehaviorSubject<any>([]);

  private cart: ProductosCart[] = [];
  constructor(private _snackBar: MatSnackBar) { }

  agregarAlCarrito(producto: Product, quantity:number): void {
    const newProducto: ProductosCart = {
      id: producto.id,
      type: producto.type,
      name: producto.name,
      details: producto.details,
      description: producto.description,
      brand: producto.brand,
      price: producto.price,
      img: producto.img,
      cantidad: quantity
    };

    // Verifica si el producto ya está en el carrito
    const productoExistente = this.cart.find(p => p.id === newProducto.id);

    if (productoExistente) {
      // Si el producto ya está en el carrito, actualiza su cantidad
      productoExistente.cantidad= quantity + productoExistente.cantidad;
    } else {
      // Si el producto no está en el carrito, agrégalo
      this.cart.push(newProducto);
      this.productList.next(this.cart);
      this._snackBar.open('¡Producto agregado al carrito!', 'Ok', { duration: 3000 });

        }
  }


  eliminarDelCarrito(producto: ProductosCart): void {
    const productoExistente = this.cart.find(p => p.id === producto.id);
    if (productoExistente) {
      const index = this.cart.findIndex(p => p.id === producto.id);
      this.cart.splice(index, 1);
    }
    this.productList.next(this.cart);
    this._snackBar.open('Producto eliminado del carrito.', 'Ok', {
      duration: 3000,
    });
  }


  actualizarCantidad(producto: ProductosCart, cantidad: number): void {
    const productoExistente = this.cart.find(p => p.id === producto.id);

    if (productoExistente) {
      // Si el producto ya está en el carrito, actualiza su cantidad
      producto.cantidad = cantidad;
      this.cart.push(producto);
      this.productList.next(producto);
      
    }
  }
  obtenerSubTotal(): number {
    let subtotal = 0;
    this.cart.forEach(producto => {
      subtotal += producto.price * producto.cantidad;
    });
    return subtotal;
  }

  obtenerTotal(): number {
    let total = 0;
    let envio = 400;
    this.cart.forEach(producto => {
      const subtotal = producto.price * producto.cantidad;
      total += subtotal;
    });

    return total+envio;
  }

  obtenerCarrito(): ProductosCart[] {
    // Devuelve los productos en el carrito
    return this.cart;

  }

  decrementQuantity(producto: ProductosCart) : void {
    const productoExistente = this.cart.find(p => p.id === producto.id);
    if (productoExistente) {
    if (producto.cantidad > 1) {
      producto.cantidad--;
    }
   }
  }

  incrementQuantity(producto: ProductosCart) : void {
    const productoExistente = this.cart.find(p => p.id === producto.id);
    if (productoExistente) {
    if (producto.cantidad >= 1) {
      producto.cantidad++;
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
}
