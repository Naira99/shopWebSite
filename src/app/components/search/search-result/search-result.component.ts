import { Component, OnInit,Input } from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {UserService} from '../../../service/user.service';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';    
import {Product} from '../../../models/product';
import {Router} from '@angular/router';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(
  	private product:ProductService,
  	private search:UserService,
  	@Inject(DOCUMENT) privat,private router:Router) { }
	  	searchProduct :string;

	productsName = [];
	products=[];
	
	 ngOnInit(): void {
	 	console.log("ssssss",this.searchProduct)
	 	this.searchProduct==''? false:true;
		this.getProduct();
		this.getSearchValue();
	}

	getSearchValue(){
		this.search.getSearch().subscribe((s)=>this.searchProduct=s);
	}
	  
	getProduct(){
	  	this.product.getProducts().subscribe((product)=>{
	  		for (let item of product) {
	  			this.productsName.push(item.name);
	  			this.products.push(item);
	  		}
	  	})
	}

	viewProduct(id:Product[]){
    this.router.navigate(['/product',{id:id}]).then(()=>{
         window.location.reload();
         window.scroll({top:0})
    });
  }
}
