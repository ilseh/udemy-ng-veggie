import { AuthService } from '../auth.service';
import { AppUser } from '../models/appuser';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from "../shopping-cart.service";
import { ShoppingCart } from "../models/shopping-cart";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = await this.shoppingCartService.getCart();
  }
  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) {
  }

  logout() {
    this.auth.logout();
  }
}
