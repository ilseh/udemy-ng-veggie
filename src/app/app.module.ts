import { AdminAuthGuardService } from './admin-auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
// import { DataTableModule } from 'angular-4-data-table/src/index';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';

import { routing } from './app.routing';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { UserService } from './user.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';

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
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    //    DataTableModule,
    NgbModule.forRoot(),
    routing,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthService, AuthGuardService, UserService, AdminAuthGuardService, CategoryService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
