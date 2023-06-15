import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Product} from '../../../assets/interfaces/product.interface';
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
  constructor( protected router:Router, public cartService: CartService, public productService: ProductService){

  }

  product! : Product;

  agregarAlCarrito(id: number) {

    this.productService.getProductById(id).subscribe(serverProduct => {
      this.product = serverProduct;
      this.cartService.agregarAlCarrito(this.product,1);
      this.router.navigate(['/cart']);
    });

  }


  viewProduct(id:number){
    this.router.navigate(['/product',id])
  }
}
