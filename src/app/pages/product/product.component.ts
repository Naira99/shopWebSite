import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @ViewChild("image") image: ElementRef;


  productList: Product[] = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {

    let id = Number(this.route.snapshot.paramMap.get('id')) || 5
    this.getProductId(id)

  }

  getProductId(id) {
    this.productService.getProducts().subscribe((product) => {
      product.forEach((p, i) => {
        if (p.id == id) {
          this.productList.push(p);
          return;
        }
      })

    })

  }


  imageSrc(src) {
    this.image.nativeElement.src = src;
  }


  carouselOptions = {
    // margin: 25,
    nav: true,
    navText: ["", ""],
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
