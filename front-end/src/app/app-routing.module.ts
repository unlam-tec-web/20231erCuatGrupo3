import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeViewComponent } from './views/home-view/home-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import {ProductViewComponent} from "./views/product-view/product-view.component";
import {RecoverPasswordViewComponent} from "./views/recover-password-view/recover-password-view.component";
import {CartViewComponent} from "./views/cart-view/cart-view.component";
import {CategoryViewComponent} from "./views/category-view/category-view.component";
import{CheckoutViewComponent} from "./views/checkout-view/checkout-view.component";
import { ProfileViewComponent } from './views/profile-view/profile-view.component';
import { OrderConfirmationViewComponent } from './views/order-confirmation-view/order-confirmation-view.component';
import { VerificationCodeViewComponent } from './views/verification-code-view/verification-code-view.component';
const routes: Routes = [
  {path:'',component:HomeViewComponent},
  {path: 'product/:id', component: ProductViewComponent},
  {path:'login',component:LoginViewComponent},
  {path:'recover-password',component:RecoverPasswordViewComponent},
  {path:'cart',component:CartViewComponent},
  {path:'checkout',component:CheckoutViewComponent},
  {path:'category/:type',component:CategoryViewComponent},
  {path: 'profile', component: ProfileViewComponent},
  {path: 'order-confirmation', component: OrderConfirmationViewComponent},
  {path: 'checkCode',component:VerificationCodeViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
