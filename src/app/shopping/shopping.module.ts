import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthGuardService } from '../auth-guard.service';

import { ProductsComponent } from './components/products/products.component';
import { ShoppingCardComponent } from './components/shopping-card/shopping-card.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components//order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'shopping-cart', component: ShoppingCardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
      { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService] }
    ])
  ],
  declarations: [
    ShoppingCardComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    ProductsComponent,
    MyOrdersComponent,
    ProductFilterComponent
  ]
})
export class ShoppingModule { }
