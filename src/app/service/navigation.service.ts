import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  /*navigation item*/
  links = new Array<{ label: string, router: string }>()
  path = this.router.config;


  private showNav$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showCart: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
  constructor(private router: Router) {
    router.events.subscribe(() => {
      this.setShowNav(false);
    });
    for (const i of this.path) {
      if (i.path == "") {
        continue
      } else {
        this.links.push({ label: i.path, router: `/${i.path}` })
      }
    }

  }

  getNavList() {
    return this.links;
  }

  getShowNav() {
    return this.showNav$.asObservable();
  }
  setShowNav(showHide: boolean) {

    this.showNav$.next(showHide);
  }

  setShowCart(showHide: Boolean) {
    this.showCart.next(showHide);
  }
  getShowCart() {
    return this.showCart.asObservable();
  }

  toggleNavState() {
    this.showNav$.next(!this.showNav$.value);
  }

  isNavOpen() {
    return this.showNav$.value;
  }


}
