import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductosCart } from 'src/assets/interfaces/productosCart.interface';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  cart : ProductosCart[] = []; // Verifica que esta propiedad esté declarada y definida correctamente

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.obtenerCarrito();
  }

  decrementQuantity(producto: ProductosCart) : void {
    this.cartService.decrementQuantity(producto);
  }

  incrementQuantity(producto: ProductosCart) : void {
    this.cartService.incrementQuantity(producto);
  }

  // Componente
// ...

onQuantityChange(id: number) {
  console.log(this.cart[this.cart.findIndex(p => p.id === id)].cantidad);
}

eliminarDelCarrito(producto: ProductosCart): void {
  this.cartService.eliminarDelCarrito(producto);
}

// ...

  // productosCart = [
  //   {
  //     id:1,
  //     type: 'Cerveza',
  //     name:'Heineken 6x 355cc Sin Alcohol',
  //     details:'Rubia',
  //     description: 'Cerveza Heineken Sin Alcohol 0.0% Lata 355ml Pack x6',
  //     brand:'Heineken',
  //     price:'3000',
  //     img:'../../../assets/img/heineken.jpg',
  //     cantidad:1
  //   },
  //   {
  //     id:2,
  //     type: 'Vinos',
  //     name:'Alamos Chardonay 750ml',
  //     details:'Blanco',
  //     description: 'Botella de vino blanco, Alamos Chardonay de 750ml.',
  //     brand:'Alamos',
  //     price:'2081',
  //     img:'../../../assets/img/0019-ALAMOS-CHARDONNAY.jpg',
  //     cantidad:1
  //   },
  //   {
  //     id:3,
  //     type: 'Vinos',
  //     name:'Benjamin Malbec 750ml',
  //     details:'Tinto',
  //     description: 'Botella de vino blanco, Benjamin Malbec de 750ml.',
  //     brand:'Benjamin',
  //     price:'800',
  //     img:'../../../assets/img/BENJAMIN-MALBEC.jpg',
  //     cantidad:1
  //   },
  //   {
  //     id:4,
  //     type: 'Cerveza',
  //     name:'Budweiser 410cc',
  //     details:'Rubia',
  //     description: 'Cerveza Budweiser en lata de 410cc.',
  //     brand:'Budweiser',
  //     price:'260',
  //     img:'../../../assets/img/bud-78.png',
  //     cantidad:1
  //   },
  // ];
}
