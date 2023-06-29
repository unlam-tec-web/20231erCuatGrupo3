import {CartProduct} from "./CartProduct";

export class Cart {
  items: CartProduct[]=[];
  totalPrice: number = 0;
  totalCount: number = 0;
}
