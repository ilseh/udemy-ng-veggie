import { AdminAuthGuardService } from './admin/services/admin-auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'angular-4-data-table';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { routing } from './app.routing';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { CategoryService } from './category.service';
import { ProductService } from './product.service'
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingModule } from './shopping/shopping.module';
import { AdminModule } from "./admin/admin.module";


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
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ShoppingModule,
    AdminModule,
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
