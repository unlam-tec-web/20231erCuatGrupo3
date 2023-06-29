import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Product } from "../../shared/models/Product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit{
  type! : string;
  private sub: any;
  products : Product[] = [];
  category! : string;

  constructor(
    private route:ActivatedRoute,
    protected router:Router,
    private productService:ProductService
  ){}

 ngOnInit(): void {
   this.sub = this.route.params.subscribe(params => {this.type = params['type']})
   this.getProductsByCategory();
 }

  private getProductsByCategory() {
   this.sub = this.route.params.subscribe(({type}) => {
     this.productService.getProductsByCategory(this.type).subscribe(serverProduct => {
       this.products = serverProduct;
       this.category = type;
     });
   });
 }

  ngOnDestroy():void{
    this.sub.unsubscribe();
  }

  findByName(products: any[],name: string): any[] {
    return products.filter(p => p.category == name);
  }

}
