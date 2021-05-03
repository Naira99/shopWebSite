import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournalComponent } from './pages/journal/journal.component';
import { ProductComponent } from './pages/product/product.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { ShopComponent } from './pages/shop/shop.component';
import { MainComponent } from './pages/main/main/main.component';
import {UserAccountComponent} from './pages/user-account/user-account.component';
import {SearchResultComponent} from './components/search/search-result/search-result.component';
import {ViewCartComponent} from './components/view-shoping-cart/view-cart/view-cart.component';
import {WishlistComponent} from './components/wishlist/wishlist.component';
import {ContactComponent} from './components/contact/contact.component';
import {AboutUsComponent} from './components/about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    component:MainComponent
  },
  {
    path: 'main',
    component:MainComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'faqs',
    component:FaqsComponent
  },
  {
    path: 'journal',
    component: JournalComponent
  },
   {
    path:'wishlist',
    component:WishlistComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
   {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'my-account',
    component:UserAccountComponent
  },
  {
    path:'search-result',
    component:SearchResultComponent
  },
   {
    path:'view-cart',
    component:ViewCartComponent
  },
 
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
