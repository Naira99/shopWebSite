import { Component, OnInit, HostListener } from '@angular/core';
import { WishlistService } from 'src/app/service/wishlist.service';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  emptyWishlist: Boolean = true;
  wishlist: any[] = [];
  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.wishlistService.getWishlist().subscribe((list) => {
      this.wishlist = list;
      this.wishlist.length == 0 ? this.emptyWishlist = true : this.emptyWishlist = false;
    })
  }

  removeProductInWishlist(id) {
    this.wishlistService.deleteWishlist(id).subscribe((del) => {
      this.ngOnInit();
      this.wishlistService.getWishlist().subscribe((list) => {
        this.wishlistService.subject.next(list.length);
      })
    });
  }

  wishlistAddToCart(product) {

    let prod;
    for (let p of [product]) {
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
    this.cartService.setCart((prod)).subscribe((e) => {
      this.cartService.getCartSubject.next(true);
    })

  }

}
