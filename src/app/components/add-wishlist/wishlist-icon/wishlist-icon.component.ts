import { Component, OnInit, HostListener } from '@angular/core';
import { WishlistService } from 'src/app/service/wishlist.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-wishlist-icon',
  templateUrl: './wishlist-icon.component.html',
  styleUrls: ['./wishlist-icon.component.css']
})
export class WishlistIconComponent implements OnInit {
  matBadgeCount: Number = 0;

  hidden = false;


  constructor(
    private wishlistService: WishlistService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.wishlistService.getWishlist().subscribe((list) => {
      this.matBadgeCount = list.length;
      this.badgeHidden();
    })
    this.wishlistService.matBadge().subscribe((badge) => {
      this.matBadgeCount = badge;
      this.badgeHidden();
    })

  }

  badgeHidden() {

    if (this.matBadgeCount == 0) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
    console.log("hidden", this.hidden)
  }
  @HostListener("click")
  viewWishlist() {
    this.wishlistService.getWishlist().subscribe(
      (list) => {

        this.router.navigate(['wishlist']);
      })
  }
}
