import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';
import { LoadProductsService } from 'src/app/service/load-products.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor(private load: LoadProductsService) { }
  start: number = 4;
  limit: number = 8;
  ngOnInit(): void {
    this.load.setStart(this.start);
    this.load.setLimit(this.limit);
  }


}
