import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DialogService } from 'src/app/service/dialog.service';
import { ViewShopingCartComponent } from '../../components/view-shoping-cart/view-shoping-cart.component';
import { NavigationService } from 'src/app/service/navigation.service';
import { CartService } from 'src/app/service/cart.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShopingCartComponent implements OnInit {

  count: Number = 0;
  hidden: boolean = false;
  constructor(
    private service: NavigationService,
    private router: Router,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.productCountGet().subscribe((count) => {

      this.count = count;
      this.badgeHidden();
    })
  }
  badgeHidden() {

    if (this.count == 0) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }

  open() {
    let url = this.router.url
    if (url == '/view-cart') {
      this.service.setShowCart(false);
    } else {
      this.service.setShowCart(true);
    }

  }

}
