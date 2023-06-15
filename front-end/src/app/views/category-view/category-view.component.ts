import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../assets/interfaces/product.interface";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit{
  id! : number;
  private sub: any;
  products : Product[] = [];
  category! : string;

  constructor(
    private route:ActivatedRoute,
    protected router:Router,
    private productService:ProductService
  ){}

 ngOnInit(): void {
   this.sub = this.route.params.subscribe(params => {this.id = params['id']})
   this.getProductsByCategory();
 }

  private getProductsByCategory() {
   this.sub = this.route.params.subscribe(({id}) => {
     this.productService.getProductsByCategory(this.id).subscribe(serverProduct => {
       this.products = serverProduct;
       this.category = serverProduct[0].type;
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
