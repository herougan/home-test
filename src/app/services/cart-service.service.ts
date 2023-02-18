import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { MOCK_PRODUCTS } from 'src/assets/static/data/mock-products';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCart(user_id: number): Observable<Product[]> {
    // User_id not relevant. Just for completion's sake
    return of([]);
  }

  initFakeCart(): Observable<CartItem[]> {

    let answer: CartItem[] = [];

    answer.push(new CartItem(MOCK_PRODUCTS[5], 1));
    answer.push(new CartItem(MOCK_PRODUCTS[4], 1));
    answer.push(new CartItem(MOCK_PRODUCTS[6], 3));

    return of(answer);
  }

  addToCart(): void {

  }

  removeFromCart(): void {

  }

  clearCart(): void {

  }
}
