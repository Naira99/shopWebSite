import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoadProductsService {

  start = new BehaviorSubject<number>(0);
  limit = new BehaviorSubject<number>(4);

  constructor() {

  }
  setStart(start) {
    return this.start.next(start);
  }

  getStart() {
    return this.start.asObservable();
  }

  setLimit(limit) {
    return this.limit.next(limit);
  }

  getLimit() {
    return this.limit.asObservable();
  }


}
