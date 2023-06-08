import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() img : any = '';
@Input() price : any = '';
@Input() name : any = '';
@Input() id : any = '';
  constructor( protected router:Router, public cartService: CartService, public productoService: ProductService){

  }

  agregarAlCarrito(id: number) {

    this.cartService.agregarAlCarrito(this.productoService.getProductById(id));
  }


  viewProduct(id:number){
    this.router.navigate(['/product',id])
  }
}
