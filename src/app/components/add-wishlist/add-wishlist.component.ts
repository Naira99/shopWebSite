import { Component, OnInit, Input, HostListener } from '@angular/core';
import { WishlistService } from 'src/app/service/wishlist.service';
@Component({
  selector: 'app-add-wishlist',
  templateUrl: './add-wishlist.component.html',
  styleUrls: ['./add-wishlist.component.css']
})
export class AddWishlistComponent implements OnInit {

  @Input() addWishlist;
  constructor(private wishlist: WishlistService) { }

  ngOnInit(): void {
  }

  @HostListener("click")
  addProductToWishlist() {
    this.wishlist.addWishlist(this.addWishlist).subscribe((s) => {
      this.wishlist.getWishlist().subscribe((list) => {

        this.wishlist.subject.next(list.length);
      })
    },
      (err) => {
        console.log("err", err);
      });

  }

}
