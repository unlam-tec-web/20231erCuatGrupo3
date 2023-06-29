import {Product} from "../shared/models/Product";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {
  CATEGORIES_URL,
  PRODUCT_BY_CATEGORY_URL,
  PRODUCT_BY_ID_URL,
  PRODUCT_BY_SEARCH_URL,
  PRODUCT_URL
} from "../shared/constants/urls";
import {Observable} from "rxjs";
import {Category} from "../../assets/interfaces/category.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient){ }


  public getProducts() : Observable <Product[]>{
    return this.http.get<Product[]>(PRODUCT_URL);
  }

  public getCategories() : Observable <Category[]>{
    return this.http.get<Category[]>(CATEGORIES_URL);
  }

  public getProductById(id : number): Observable <Product>{

    return this.http.get<Product>(PRODUCT_BY_ID_URL+id);
  }
  public getProductsByCategory(type:string): Observable <Product[]>{
    return this.http.get<Product[]>(PRODUCT_BY_CATEGORY_URL + type);
  }
  public getProductsByName(name:string): Observable <Product[]>{
    return this.http.get<Product[]>(PRODUCT_BY_SEARCH_URL + name);
  }
}
