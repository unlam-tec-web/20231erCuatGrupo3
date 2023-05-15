import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeViewComponent } from './views/home-view/home-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import {ProductViewComponent} from "./views/product-view/product-view.component";
import {RecoverPasswordViewComponent} from "./views/recover-password-view/recover-password-view.component";
import {CartViewComponent} from "./views/cart-view/cart-view.component";
import {CategoryViewComponent} from "./views/category-view/category-view.component";

const routes: Routes = [
  {path:'',component:HomeViewComponent},
  {path: 'product/:id', component: ProductViewComponent},
  {path:'login',component:LoginViewComponent},
  {path:'recover-password',component:RecoverPasswordViewComponent},
  {path:'cart',component:CartViewComponent},
  {path:'category/:name',component:CategoryViewComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
