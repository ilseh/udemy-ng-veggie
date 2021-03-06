import { Product } from "./product";

export class ShoppingCartItem {
  $key: string;
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;

  constructor(init?: Partial<ShoppingCartItem>) {
    console.log('>>>>>', init.imageUrl);
    Object.assign(this, init);
  }

  get totalPrice() {
    console.log('get total price');
    return this.price * this.quantity;
  }
}
