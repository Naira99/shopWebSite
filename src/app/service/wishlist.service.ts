import { Injectable } from '@angular/core';
import { wishlistUrl } from '../config/api';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  subject: Subject<Number> = new Subject<Number>();

  constructor(private http: HttpClient) { }

  matBadge() {
    return this.subject.asObservable();
  }

  getWishlist(): Observable<any[]> {
    return this.http.get<any[]>(wishlistUrl);
  }

  addWishlist(list: any[]) {

    return this.http.post<void>(wishlistUrl, list);
  }

  deleteWishlist(id): Observable<void> {
    return this.http.delete<void>(wishlistUrl + '/' + id)
  }
}
