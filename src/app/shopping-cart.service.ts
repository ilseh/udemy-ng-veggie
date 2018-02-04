import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Product } from './models/product';
import 'rxjs/add/operator/take';
import 'rxjs/operator/map';
import { ShoppingCart } from "./models/shopping-cart";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async updateItemQuantity(product: Product, change: number) {
    const cartId = await this.getOrCreateCartId();
    const item$ = this.getItem(cartId, product.$key);

    item$.take(1).subscribe(item =>
      item$.update({ product: product, quantity: (item.quantity || 0) + change }));
  }

  async addToCart(product: Product) {
   this.updateItemQuantity(product, 1);
  }

  removeFromCart(product: Product) {
    this.updateItemQuantity(product, -1);
  }

  async getCart(): Promise<Observable<ShoppingCart>>{
    return this.db.object('/shopping-carts/' + await this.getOrCreateCartId())
      .map(x => new ShoppingCart(x.items));
  }

  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (!cartId) {
      let result = await this.create();
      cartId = result.key;
    }
    return cartId;
  }

}
