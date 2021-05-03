import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';
import { LoadProductsService } from 'src/app/service/load-products.service'
@Component({
  selector: 'app-shop-displaying',
  templateUrl: './shop-displaying.component.html',
  styleUrls: ['./shop-displaying.component.css']
})
export class ShopDisplayingComponent implements OnInit {



  start: number = 0;
  limit: number = 4;

  productList: Product[] = [];
  constructor(
    private productService: ProductService,
    private router: Router,
    private loadService: LoadProductsService
  ) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe((product) => this.productList = product);
    this.loadService.getLimit().subscribe((limit) => this.limit = limit);
    this.loadService.getStart().subscribe((start) => this.start = start);
  }





  viewProduct(id: Product[]) {
    this.router.navigate(['/product', { id: id }]).then(() => {
      window.location.reload();
      window.scroll({ top: 0 })
    });
  }

}
