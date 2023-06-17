import { SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { Product } from 'src/assets/interfaces/product.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: SocialUser | null = null;
  loggedIn: boolean = false;
  nombreDelProducto: string = '';
  searchedProducts: Product[] = [];

  constructor(
    private userServices: UserService,
    private router: Router,
    private productServices: ProductService
  ) {}

  ngOnInit() {
    this.obtenerUsuario();
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
    this.loggedIn = this.user != null;
  }

  borrarSesion() {
    this.userServices.borrarSesion();
    this.loggedIn = false;
    this.user = null;
    this.router.navigateByUrl('/');
  }
}
