import { AdminAuthGuardService } from './admin-auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'angular-4-data-table';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCardComponent } from './shopping/components/shopping-card/shopping-card.component';

import { routing } from './app.routing';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { CheckOutComponent } from './shopping/components/check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { OrderSuccessComponent } from './shopping/components//order-success/order-success.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { ProductsComponent } from './shopping/components/products/products.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './shopping/components/my-orders/my-orders.component';
import { UserService } from './user.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { ProductFilterComponent } from './shopping/components/products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './shopping-cart.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyADL3f4QJnOet9-60EV8W4LMHf389bqhTY',
  authDomain: 'veggietest-ecbeb.firebaseapp.com',
  databaseURL: 'https://veggietest-ecbeb.firebaseio.com',
  projectId: 'veggietest-ecbeb',
  storageBucket: '',
  messagingSenderId: ''
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ShoppingCardComponent,
    CheckOutComponent,
    HomeComponent,
    OrderSuccessComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductsComponent,
    LoginComponent,
    MyOrdersComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    NgbModule.forRoot(),
    routing,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthService, AuthGuardService, UserService, AdminAuthGuardService,
    CategoryService, ProductService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
