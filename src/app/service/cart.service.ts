import { Injectable } from '@angular/core';
import { cartUrl } from '../config/api';
import { Cart } from '../models/cart';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  subject: Subject<Number> = new Subject<Number>();

  getCartSubject: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);

  subTotal: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  total: number = 0;
  constructor(private http: HttpClient) { }

  getMsg() {
    return this.getCartSubject.asObservable();
  }

  getCart(): Observable<Cart[]> {
    return this.http.get<Cart[]>(cartUrl)
  }
  productCount() {
    let count = 0;
    let sum = 0;
    this.getCart().subscribe((cart) => {
      for (let product of cart) {
        count += product.productCount;
        sum += product.productCount * product.price;
      }
      this.subject.next(count);
      this.setSubTotals(sum);
    })
  }
  productCountGet() {
    this.productCount();
    return this.subject.asObservable();
  }

  setCart(cart: Cart[]) {
    return this.http.post<Cart[]>(cartUrl, cart)

  }

  updateCart(cart: Cart) {
    return this.http.put<Cart>(cartUrl + '/' + cart.id, cart)
  }

  deleteCart(id: number): Observable<void> {
    return this.http.delete<void>(cartUrl + '/' + id);
  }
  setSubTotals(total: number) {

    return this.subTotal.next(total);;
  }


  getSubTotals() {
    return this.subTotal.asObservable();
  }




}
