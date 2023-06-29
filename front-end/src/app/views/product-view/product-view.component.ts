import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { CartService } from 'src/app/services/cart.service';
import { Product } from "../../shared/models/Product";
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})

export class ProductViewComponent implements OnInit{

  quantity : number =1;
  totalPrice! : number;
  price! : number;
  product! : Product;
  private sub: any;

  constructor(
    private route:ActivatedRoute,
    protected router:Router,
    private productService:ProductService,
    private cartService:CartService)
  {}

  ngOnInit(): void {
    this.getProduct();
  }

  private getProduct() {
    this.sub = this.route.params.subscribe(({id}) => {
      this.productService.getProductById(id).subscribe(serverProduct => {
        this.product = serverProduct;
        this.setTotalPrice();
      });
    });
  }

  setTotalPrice(){
    this.totalPrice= this.product.price;
  }

  addToCart(quantity:number){
    this.cartService.addToCart(this.product);
    this.cartService.changeQuantity(this.product.id,quantity);
    this.router.navigate(['/cart']);
  }

  getTotalPrice(){
    this.totalPrice = this.quantity * this.product.price;
  }

  add(){
    this.quantity += 1;
  }

  remove(){
    this.quantity > 1 ? this.quantity -= 1 : this.quantity;
  }


  }
