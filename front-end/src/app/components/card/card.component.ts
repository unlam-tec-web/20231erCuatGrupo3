import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
//import {Product} from '../../../assets/interfaces/product.interface';
import { Product } from "../../shared/models/Product";
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
  constructor(
    protected router:Router,
    public cartService: CartService,
    public productService: ProductService){

  }
  product! : Product;

  agregarAlCarrito(id: number) {

    this.productService.getProductById(id).subscribe(serverProduct => {
      this.product = serverProduct;
      this.cartService.addToCart(this.product);
    });
  }

  viewProduct(id:number){
    this.router.navigate(['/product',id])
  }
}
