import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';
import {RouterModule} from '@angular/router';
import { NgxMailtoModule } from 'ngx-mailto'; 
import {OwlModule} from 'ngx-owl-carousel';

import {  FilterPipe} from '../pipes/filter.pipe';
import { HomeComponent } from '../pages/home/home.component';
import { MainDirective } from '../pages/main/main/main.directive';

import { AddShopingCartComponent } from './add-shoping-cart/add-shoping-cart.component';
import { AddWishlistComponent } from './add-wishlist/add-wishlist.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FixedNavbarDirective } from './header/fixed-nav-bar.directive';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import {LoginComponent} from "./login/login.component";
import { NewsProductComponent } from './news-product/news-product.component';
import { RegistrationComponent } from './registration/registration.component';
import { ScrollBtnDirective } from './scroll-btn/scroll-btn-directive';
import { ScrollBtnComponent } from './scroll-btn/scroll-btn.component';
import { SearchComponent } from './search/search.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { SideNavContentComponent } from './side-nav-content/side-nav-content.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ViewProductIconComponent } from './view-product-icon/view-product-icon.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewShopingCartComponent } from './view-shoping-cart/view-shoping-cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistIconComponent } from './add-wishlist/wishlist-icon/wishlist-icon.component';
import { SearchIconComponent } from './search/search-icon/search-icon.component';
import { SearchResultComponent } from './search/search-result/search-result.component';
import { ShopingCartContentComponent } from './view-shoping-cart/shoping-cart-content/shoping-cart-content.component';
import { ViewCartComponent } from './view-shoping-cart/view-cart/view-cart.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { LoadProductsBtnComponent } from './load-products-btn/load-products-btn.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutHeaderComponent } from './about-us/about-header/about-header.component';


@NgModule({
  declarations: [
    AddShopingCartComponent,
    AddWishlistComponent,
    ViewProductIconComponent,
    ViewProductComponent,
    RegistrationComponent,
    LoginComponent,
    FooterComponent,
    SideNavComponent,
    SideNavContentComponent,
    HomeComponent,
    HeaderNavComponent,
    FixedNavbarDirective,
    ScrollBtnComponent,
    ScrollBtnDirective,
    HeaderComponent,
    WishlistComponent,
    ShopingCartComponent,
    SearchComponent,

    FilterPipe,
    SearchResultComponent,
     MainDirective,
     ViewShopingCartComponent,
     ShopingCartContentComponent,
     ViewCartComponent,
     SearchIconComponent,
     InputComponent,
     NewsProductComponent,
     WishlistIconComponent,
     SpinnerComponent,
     ProductDescriptionComponent,
     LoadProductsBtnComponent,
     ContactComponent,
     AboutUsComponent,
     AboutHeaderComponent

  ],
  imports: [
    CommonModule,
    MatDialogModule,
    OwlModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatCardModule,
    RouterModule,
    MatBadgeModule,
    MatTooltipModule,
    MatChipsModule,
    NgxMailtoModule
  ],
  providers: [
    {provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DATA, useValue: {}},
  ],
  exports:[
    AddShopingCartComponent,
    AddWishlistComponent,
    ViewProductIconComponent,
    ViewProductComponent,
    RegistrationComponent,
    LoginComponent,
    FooterComponent,
    SideNavComponent,
    SideNavContentComponent,
    HomeComponent,
    HeaderNavComponent,
    FixedNavbarDirective,
    ScrollBtnComponent,
    ScrollBtnDirective,
    HeaderComponent,
    WishlistComponent,
    ShopingCartComponent,
    SearchComponent,
  
    FilterPipe,
    MainDirective,
    ViewShopingCartComponent,
    ShopingCartContentComponent,
    NewsProductComponent,
    SpinnerComponent,
    InputComponent,
    ProductDescriptionComponent,
    LoadProductsBtnComponent

  ],
  entryComponents: [ ViewProductComponent]
})
export class ComponentsModule { }
