import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  showOverlay: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);


  constructor() { }

  getSpinner() {
    return this.showOverlay.asObservable();
  }
}
