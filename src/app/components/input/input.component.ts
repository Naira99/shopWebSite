import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() getValue;
  item;
  constructor(
    private cartService: CartService

  ) { }

  ngOnInit(): void {
    this.item = this.getValue
  }

  incrementProduct(product) {

    product.productCount++;
    this.updateInputValue(product);
    this.updateProductCount()

  }

  decrementProduct(product) {
    product.productCount <= 1 ? product.productCount = 1 : product.productCount--;
    this.updateInputValue(product)
    this.updateProductCount()
  }


  updateInputValue(productCount) {
    console.log("count", productCount);
    this.cartService.updateCart(productCount).subscribe((s) => {
      this.updateProductCount()
      this.ngOnInit()
    });
  }

  updateProductCount() {
    this.cartService.productCountGet();
  }
}
