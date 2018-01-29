import { AdminAuthGuardService } from './admin-auth-guard.service';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ShoppingCardComponent } from './shopping/components/shopping-card/shopping-card.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AuthGuardService } from './auth-guard.service';
import { CheckOutComponent } from './shopping/components/check-out/check-out.component';
import { OrderSuccessComponent } from './shopping/components/order-success/order-success.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './shopping/components//my-orders/my-orders.component';




export const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },

  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService] },

  {
    path: 'admin/products/new', component: ProductFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService]
  },
  {
    path: 'admin/products/:id', component: ProductFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService]
  },
  {
    path: 'admin/products', component: AdminProductsComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService]
  },
  {
    path: 'admin/orders', component: AdminOrdersComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
