import { ShoppingCartItem } from "./shopping-cart-item";
import { Product } from "./product";

export class  ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(public itemsMap: { [productId: string]: ShoppingCartItem }) {
    for (const productId in itemsMap) {
      const item = itemsMap[productId];
      this.items.push(new ShoppingCartItem(item.product, item.quantity));
    }
  }

  get totalPrice() {
    let sum = 0;
    for (let item of this.items) {
     sum += item.totalPrice;
    }
    return sum;
  }

  get totalItemsCount() {
    let count = 0;
    for (let productId in this.itemsMap) {
      count += this.itemsMap[productId].quantity;
    }
    return count;
  }

  getQuantity(product: Product) {
    const item = this.itemsMap[product.$key];
    return item ? item.quantity : 0;
  }
}
