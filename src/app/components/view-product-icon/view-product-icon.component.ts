import { Component, OnInit, Input, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ViewProductComponent } from '../view-product/view-product.component';
@Component({
  selector: 'app-view-product-icon',
  templateUrl: './view-product-icon.component.html'
})
export class ViewProductIconComponent implements OnInit {
  @Input() viewProduct;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  @HostListener("click")
  viewProductModal() {
    this.dialog.open(ViewProductComponent, { data: this.viewProduct });


  }
}
