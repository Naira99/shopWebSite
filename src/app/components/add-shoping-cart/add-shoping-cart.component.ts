import { Input, HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Cart } from '../../models/cart';
import { Router } from '@angular/router';
import { ShopingCartContentComponent } from '../view-shoping-cart/shoping-cart-content/shoping-cart-content.component';
@Component({
  selector: 'app-add-shoping-cart',
  templateUrl: './add-shoping-cart.component.html',
  styleUrls: ['./add-shoping-cart.component.css']
})
export class AddShopingCartComponent implements OnInit {

  @Input() productAddToCart;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
  }
  @HostListener("click")
  getProducts() {
    let prod;
    for (let p of [this.productAddToCart]) {
      prod = {
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        image: p.image,
        customImage: p.customImage,
        productCount: 1
      }
    }
    this.cartService.setCart((prod)).subscribe((e: Cart[]) => {
      this.cartService.getCartSubject.next(true);
      this.cartService.productCountGet();
    })
  }

}
