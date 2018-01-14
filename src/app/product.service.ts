import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

const PRODUCTS_TABLE = '/products/';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list(PRODUCTS_TABLE).push(product);
  }

  update(productId, product) {
    return this.db.object(PRODUCTS_TABLE + productId).update(product);
  }

  getAll() {
    return this.db.list(PRODUCTS_TABLE);
  }

  get(productId) {
    return this.db.object(PRODUCTS_TABLE + productId);
  }

  delete(productId) {
    return this.db.object(PRODUCTS_TABLE + productId).remove();
  }

}
