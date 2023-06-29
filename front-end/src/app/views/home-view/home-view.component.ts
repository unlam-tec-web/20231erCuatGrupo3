import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from "../../shared/models/Product";
import {Category} from '../../../assets/interfaces/category.interface';
import {ProductService} from "../../services/product.service";
import {Observable} from "rxjs";
@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent {

  categories: Category [] = [];
  products :Product [] = [];

  constructor(private productService: ProductService, activatedRoute: ActivatedRoute){
    let ProductsObservables:Observable<Product[]>;
    let CategoriesObservables:Observable<Category[]>;

    ProductsObservables = productService.getProducts();
    ProductsObservables.subscribe((serverProducts) => {
      this.products = serverProducts;
    })

    CategoriesObservables = productService.getCategories();
    CategoriesObservables.subscribe((serverCategories) => {
      this.categories = serverCategories;
    })
  }

}
