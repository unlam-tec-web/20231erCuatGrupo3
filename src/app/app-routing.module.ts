import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeViewComponent } from './views/home-view/home-view.component';
import {ProductViewComponent} from "./views/product-view/product-view.component";  
import { LoginViewComponent } from './views/login-view/login-view.component';

const routes: Routes = [
  {path:'',component:HomeViewComponent},
  {path: 'product', component: ProductViewComponent},
  {path:'login',component:LoginViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
