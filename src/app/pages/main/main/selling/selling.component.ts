import { Component, EventEmitter, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';
import { LoadProductsService } from 'src/app/service/load-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selling',
  templateUrl: './selling.component.html',
  styleUrls: ['./selling.component.css']
})
export class SellingComponent implements OnInit {


  start: number = 0;
  limit: number = 3;
  productList: Product[] = [];
  constructor(
    private load: LoadProductsService,
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {

    this.loadProduct()
  }

  loadProduct() {
    this.productService.getProducts().subscribe((product) => {
      for (var i = this.start; i < this.limit; ++i) {
        this.productList.push(product[i]);
      }
    })
  }

  viewProduct(id: Product[]) {
    this.router.navigate(['/product', { id: id }]).then(() => {
      window.location.reload();
      window.scroll({ top: 0 })
    });
  }

}
