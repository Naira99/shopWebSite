import { Component, OnInit ,HostListener} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {DialogService} from '../../service/dialog.service';
import {UserService} from '../../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import { Inject } from '@angular/core';    
import { DOCUMENT } from '@angular/common';
// import {Promise} from '@angular/Promise'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {



  searchProduct:string  = '';
  
  constructor(
  	private router:Router,
  	private search:UserService,
  	@Inject(DOCUMENT) private document: Document,
  	 private route:ActivatedRoute,
  	 private dialog:DialogService
  	) {
  }

  ngOnInit(): void {
  	
  }
   searchProducts(){
  	this.search.addSearch(this.searchProduct);
  	this.dialog.close();
  	

  }
  escapeKeycode:number=13;
  @HostListener('document:keydown',['$event'])
  onKeyDownHandler(event:KeyboardEvent){
    if(event.keyCode===this.escapeKeycode){
       this.searchProducts();
    }
   
  }



}
