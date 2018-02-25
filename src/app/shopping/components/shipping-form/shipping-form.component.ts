import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Order } from "../../../models/order";
import { Subscription } from "rxjs/Subscription";
import { OrderService } from "../../../order.service";
import { AuthService } from "../../../auth.service";
import { Router } from "@angular/router";
import { ShoppingCart } from "../../../models/shopping-cart";

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping = {};
  userSubscription: Subscription;
  userId: string;

  constructor(private orderService: OrderService,
              private authService: AuthService,
              private router: Router) {}

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  async placeOrder() {
    const order = new Order(this.userId, this.shipping, this.cart);
    const result = await this.orderService.placeOrder(order);

    this.router.navigate((['/order-success', result.key]));
  }
}
