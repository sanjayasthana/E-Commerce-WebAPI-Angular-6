import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent } from './product-list/product-list.component';
import {ProductComponent} from './product/product.component';

const routes: Routes = [ {
  path: '',
  component: ProductListComponent
},
{
  path: 'product-list',
  component: ProductListComponent
},
{
  path: 'product/:id',
  component: ProductComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
