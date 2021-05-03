import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {  OwlModule } from 'ngx-owl-carousel';

import { ComponentsModule } from '../components/components.module';

import {ProductComponent} from './product/product.component';
import { ShopComponent } from './shop/shop.component';
import {UserAccountComponent} from './user-account/user-account.component';
import { MainComponent } from './main/main/main.component';
import { ShopDisplayingComponent } from './shop/shop-displaying/shop-displaying.component';
import { ShopHeaderComponent } from './shop/shop-header/shop-header.component';
import { SellingComponent } from './main/main/selling/selling.component';
import { TestimonialsComponent } from './main/main/testimonials/testimonials.component';
import { TrendingComponent } from './main/main/trending/trending.component';
import { VisitusComponent } from './main/main/visitus/visitus.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FaqsHeaderComponent } from './faqs/faqs-header/faqs-header.component';
import {JournalComponent} from './journal/journal.component';
@NgModule({
  declarations: [
    MainComponent,
    SellingComponent,
    TestimonialsComponent,
    VisitusComponent,
    TrendingComponent,
    UserAccountComponent,
    ShopComponent,
    ShopHeaderComponent,
    ShopDisplayingComponent,
    ProductComponent,
    FaqsComponent,
    FaqsHeaderComponent,
    JournalComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    OwlModule,
    ComponentsModule,
    MatExpansionModule
  ],
  exports:[ ]
})
export class PagesModule { }
