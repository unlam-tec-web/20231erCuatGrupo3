import { SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { CartService } from 'src/app/services/cart.service';
import { Product } from "../../shared/models/Product";
import { User } from 'src/assets/interfaces/user.interface';
import { Cart } from "../../shared/models/Cart";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: SocialUser | User | null = null;
  totalItem : number = 0;
  loggedIn: boolean = false;
  nombreDelProducto: string = '';
  searchedProducts: Product[] = [];
  cart! : Cart;

  constructor(
    private userServices: UserService,
    private router: Router,
    private productServices: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.obtenerUsuario();
    const localUser = localStorage.getItem('USUARIOLOGUEADO');
    if(this.user == null){
      this.user = localUser ? JSON.parse(localUser) : null;
    }
    this.loggedIn = this.user != null;
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
      this.totalItem = cart.totalCount;
    })

  }

  obtenerProducto() {
    this.productServices
      .getProductsByName(this.nombreDelProducto)
      .subscribe((data) => {
        this.searchedProducts = data || [];
      });
  }

  async obtenerUsuario() {
    this.user = await this.userServices.obtenerUsuarioDeLaSesion();
  }

  borrarSesion() {
    this.userServices.borrarSesion();
    this.loggedIn = false;
    this.user = null;
    this.router.navigateByUrl('/');
  }
}
