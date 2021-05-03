import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

import { CartService } from 'src/app/service/cart.service';

import { Cart } from '../../../models/cart';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  defaultMinInputValue: number = 1
  step = 1;
  cartProduct: Cart[] = [];
  subTotal: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart: Cart[]) => {
      this.cartProduct = cart;
      this.cartService.getSubTotals().subscribe((sum) => this.subTotal = sum);
    })
  }



  incrementProduct(product) {
    product.productCount++;
    this.updateInputValue(product)
    this.updateProductCount()

  }

  decrementProduct(product) {
    product.productCount--;

    this.updateInputValue(product)
    this.updateProductCount()
  }

  updateInputValue(productCount) {
    this.cartService.updateCart(productCount).subscribe((s) => {
      this.updateProductCount()
      this.ngOnInit()
    });
  }

  removeProductInCart(id) {
    this.cartService.deleteCart(id).subscribe(
      (del) => {
        this.updateProductCount();
        this.ngOnInit();
      })

  }
  updateProductCount() {
    this.cartService.productCountGet()

  }

}
