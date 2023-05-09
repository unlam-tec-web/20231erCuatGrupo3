import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeViewComponent} from "./views/home-view/home-view.component";
import {ProductViewComponent} from "./views/product-view/product-view.component";

const routes: Routes = [
  {path: 'home', component: HomeViewComponent},
  {path: 'product', component: ProductViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
