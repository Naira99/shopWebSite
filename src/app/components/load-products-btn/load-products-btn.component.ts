import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { LoadProductsService } from 'src/app/service/load-products.service';

import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-load-products-btn',
  templateUrl: './load-products-btn.component.html',
  styleUrls: ['./load-products-btn.component.css']
})
export class LoadProductsBtnComponent implements OnInit {

  productLength: number = 0;
  num: number = 4;
  limit: number = this.num;
  start; number = 0;
  loadedMsg: boolean = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private loadService: LoadProductsService) { }

  ngOnInit(): void {
    this.loadService.setLimit(this.num);
    this.loadService.setStart(this.start);

    this.productService.getProducts().subscribe((product) => this.productLength = product.length);
    this.loadService.getLimit().subscribe((limit) => { this.limit = limit })

  }


  loadMore() {
    if (this.limit > this.productLength) {
      let a = this.limit - this.productLength;
      this.limit -= a;
    } else {
      this.limit += this.num;
    }
    this.loadService.setLimit(this.limit);
    this.limit == this.productLength ? this.loadedMsg = true : this.loadedMsg = false;
  }










}
