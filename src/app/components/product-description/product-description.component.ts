import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/service/cart.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  @Input() productList;
  step: number = 1;
  constructor(private cartService: CartService) { }

  ngOnInit(): void { }
  addProductCart(product) {

    let prod;
    for (let p of [product]) {
      prod = {
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        image: p.image,
        customImage: p.customImage,
        productCount: this.countProductForm.get('inputValue').value
      }
    }

    this.cartService.setCart((prod)).subscribe((e) => {
      this.cartService.getCartSubject.next(true);
      this.cartService.productCountGet();
    },
      (err) => {
        console.log("error", err);
      })
  }

  defaultMinInputValue: number = 1

  countProductForm = new FormGroup({
    inputValue: new FormControl(this.defaultMinInputValue, [Validators.required, Validators.min(1)]),
  });

  incrementProduct() {
    this.countProductForm.setValue({
      inputValue: this.countProductForm.get("inputValue").value + this.step
    })
  }

  decrementProduct() {
    let invalid = this.countProductForm.get('inputValue').invalid;
    let inpValue = this.countProductForm.get('inputValue').value;
    if (invalid) {
      this.countProductForm.setValue({
        inputValue: 1
      })
    } else if (inpValue != this.defaultMinInputValue) {
      this.countProductForm.setValue({
        inputValue: this.countProductForm.get("inputValue").value - this.step
      })
    }
  }

}
