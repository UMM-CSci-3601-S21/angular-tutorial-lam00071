import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from './products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  addToCart(product): void {
    this.items.push(product);
  }

  getItems(): any[] {
    return this.items;
  }

  clearCart(): any[] {
    this.items = [];
    return this.items;
  }

  getShippingPrices(): Observable<object> {
    return this.http.get('./assets/shipping.json');
  }
  constructor(
    private http: HttpClient
  ) { }
}
