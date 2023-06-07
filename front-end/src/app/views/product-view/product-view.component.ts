import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {Product} from "../../../assets/interfaces/product.interface";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})

export class ProductViewComponent implements OnInit{

  quantity : number =1;
  stock : number =10;
  quantityForm = new FormControl(1);
  totalPrice! : number;
  price! : number;
  product! : Product;
  private sub: any;

  constructor(
    private route:ActivatedRoute,
    private productService:ProductService)
  {}

  ngOnInit(): void {
    this.showProductToView();
    this.setTotalPrice();
  }

  private showProductToView() {
    this.sub = this.route.params.subscribe(({id}) => {
      this.product = this.productService.getProductById(id);
    });
  }

  setTotalPrice(){
    this.totalPrice= this.product.price;
  }
  ngOnDestroy():void{
    this.sub.unsubscribe();
  }

  changeValue($event: any) {
    console.log($event);
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
