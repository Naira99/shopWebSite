import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ViewShopingCartDirection } from './view-shoping-cart.direction';
import { Observable } from 'rxjs';
import { NavigationService } from 'src/app/service/navigation.service';
@Component({
  selector: 'app-view-shoping-cart',
  templateUrl: './view-shoping-cart.component.html',
  styleUrls: ['./view-shoping-cart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewShopingCartComponent implements OnInit {
  showSideNav: Observable<Boolean>;
  @Input() opencartTemplateRef: any
  @Input() duration: number = 0.25;
  @Input() cartWidth: number = window.innerWidth;
  @Input() direction: ViewShopingCartDirection.Right;
  constructor(private service: NavigationService) { }

  ngOnInit(): void {
    this.showSideNav = this.service.getShowCart()
  }
  onSidebarClose() {
    this.service.setShowCart(false)
  }


  getSideNavBarStyle(showNav: boolean) {

    let navBarStyle: any = {};

    navBarStyle.transition = this.direction + ' ' + this.duration + 's, visibility ' + this.duration + 's';
    navBarStyle.width = this.cartWidth + 'px';
    navBarStyle[this.direction] = (showNav ? 0 : (this.cartWidth * -1)) + 'px';

    return navBarStyle;
  }

}
