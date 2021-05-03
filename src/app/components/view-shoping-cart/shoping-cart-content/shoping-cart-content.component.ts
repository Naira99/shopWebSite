import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/service/cart.service';
import { NavigationService } from 'src/app/service/navigation.service';
import { SpinnerService } from 'src/app/service/spinner.service';

import { Cart } from '../../../models/cart';
import { Router, NavigationEnd, Event, RouterEvent } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-shoping-cart-content',
  templateUrl: './shoping-cart-content.component.html',
  styleUrls: ['./shoping-cart-content.component.css']
})
export class ShopingCartContentComponent implements OnInit {
  defaultMinInputValue: number = 1
  subTotal: number = 0;
  step = 1;
  cartProduct: Cart[] = [];
  bool: Boolean = false;
  total: Boolean = false;
  constructor(
    private cartService: CartService,
    private router: Router,
    private navService: NavigationService,
    private spinner: SpinnerService) { }


  ngOnInit(): void {

    this.cartService.getMsg().subscribe((bool) => {
      if (bool || true) {
        this.cartService.getCart().subscribe((cart: Cart[]) => {
          this.cartProduct = cart;
          this.cartService.getSubTotals().subscribe((sum) => this.subTotal = sum);
          this.cartProduct.length == 0 ? this.total = false : this.total = true
          bool ? this.navService.setShowCart(true) : false;
        })
      }
    })
  }

  removeProductInCart(id) {
    this.cartService.deleteCart(id).subscribe(
      (del) => {
        this.updateProductCount();
        this.ngOnInit();

      })
  }

  viewCart() {

    this.navService.setShowCart(false)
    this.router.navigate(['view-cart'])
      .then(() => {
        window.location.reload();
      });

  }
  updateProductCount() {
    this.cartService.productCountGet()

  }

}
