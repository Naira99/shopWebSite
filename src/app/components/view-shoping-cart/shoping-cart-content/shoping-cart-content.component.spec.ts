import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCartContentComponent } from './shoping-cart-content.component';

describe('ShopingCartContentComponent', () => {
  let component: ShopingCartContentComponent;
  let fixture: ComponentFixture<ShopingCartContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingCartContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingCartContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
