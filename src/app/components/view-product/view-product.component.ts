import { Component, OnInit, Input, Inject, Optional, AfterViewInit, ViewChild, ElementRef, Renderer2, Attribute } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from 'src/app/service/cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  step: number = 1

  viewProductDialog = [];
  images = [];
  constructor(@Optional() public dialog: MatDialogRef<ViewProductComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private cartService: CartService) {

    if (Object.keys(data).length !== 0) {
      this.viewProductDialog = new Array(data);
      for (let product of this.viewProductDialog) {
        for (let img of product.image) {
          this.images.push({ image: img });
        }
      }

    }

  }



  ngOnInit(): void { }
  carouselOptions = {
    // margin: 25,
    nav: true,
    // navText: ["", ""],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 1,
        nav: true,
        loop: false
      },
      1500: {
        items: 1,
        nav: true,
        loop: false
      }
    }
  }
}
