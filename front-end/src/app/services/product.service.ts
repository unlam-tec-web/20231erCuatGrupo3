import {Product} from '../../assets/interfaces/product.interface';
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

  /*public getProducts() : Product[]{
    return [
      {
        id:1,
        type: 'Cerveza',
        name:'Heineken 6x 355cc Sin Alcohol',
        details:'Rubia',
        description: 'Cerveza Heineken Sin Alcohol 0.0% Lata 355ml Pack x6',
        brand:'Heineken',
        price:3000,
        img:'../../../assets/img/heineken.jpg'
      },
      {
        id:2,
        type: 'Vinos',
        name:'Alamos Chardonay 750ml',
        details:'Blanco',
        description: 'Botella de vino blanco, Alamos Chardonay de 750ml.',
        brand:'Alamos',
        price:2081,
        img:'../../../assets/img/0019-ALAMOS-CHARDONNAY.jpg'
      },
      {
        id:3,
        type: 'Vinos',
        name:'Benjamin Malbec 750ml',
        details:'Tinto',
        description: 'Botella de vino blanco, Benjamin Malbec de 750ml.',
        brand:'Benjamin',
        price:800,
        img:'../../../assets/img/BENJAMIN-MALBEC.jpg'
      },
      {
        id:4,
        type: 'Cerveza',
        name:'Budweiser 410cc',
        details:'Rubia',
        description: 'Cerveza Budweiser en lata de 410cc.',
        brand:'Budweiser',
        price:260,
        img:'../../../assets/img/bud-78.png'
      },
    ];
  }
  */

  public getProducts() : Observable <Product[]>{
    return this.http.get<Product[]>(PRODUCT_URL);
  }

  public getCategories() : Observable <Category[]>{
    return this.http.get<Category[]>(CATEGORIES_URL);
  }

  public getProductById(id : number): Observable <Product>{

    return this.http.get<Product>(PRODUCT_BY_ID_URL+id);
  }
  public getProductsByCategory(name:string): Observable <Product[]>{
    return this.http.get<Product[]>(PRODUCT_BY_CATEGORY_URL + name);
  }
  public getProductsByName(name:string): Observable <Product[]>{
    return this.http.get<Product[]>(PRODUCT_BY_SEARCH_URL + name);
  }
}
