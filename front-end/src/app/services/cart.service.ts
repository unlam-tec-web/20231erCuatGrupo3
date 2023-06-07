import { Injectable } from '@angular/core';
import { Product } from '../../assets/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Product[] = [];

  constructor() { }

  agregarAlCarrito(producto: Product): void {
    // Verifica si el producto ya está en el carrito
    const productoExistente = this.cart.find(p => p.id === producto.id);

    if (productoExistente) {
      // Si el producto ya está en el carrito, actualiza su cantidad
      productoExistente.cantidad++;
    } else {
      // Si el producto no está en el carrito, agrégalo
      producto.cantidad = 1;
      this.cart.push(producto);
    }
  }

  eliminarDelCarrito(producto: Product): void {
    const productoExistente = this.cart.find(p => p.id === producto.id);
    if (productoExistente) {
      const index = this.cart.findIndex(p => p.id === producto.id);
      this.cart.splice(index, 1);
    }
  }


  actualizarCantidad(producto: Product, cantidad: number): void {
    const productoExistente = this.cart.find(p => p.id === producto.id);

    if (productoExistente) {
      // Si el producto ya está en el carrito, actualiza su cantidad
      producto.cantidad = cantidad;
      this.cart.push(producto);
    }
  }

  obtenerTotal(): number {
    let total = 0;

    this.cart.forEach(producto => {
      const subtotal = producto.price * producto.cantidad;
      total += subtotal;
    });

    return total;
  }

  obtenerCarrito(): Product[] {
    // Devuelve los productos en el carrito
    return this.cart;

  }



}

