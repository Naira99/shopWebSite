import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShopingCartComponent } from './view-shoping-cart.component';

describe('ViewShopingCartComponent', () => {
  let component: ViewShopingCartComponent;
  let fixture: ComponentFixture<ViewShopingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewShopingCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShopingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
