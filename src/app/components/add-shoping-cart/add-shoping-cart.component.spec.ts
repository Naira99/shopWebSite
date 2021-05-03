import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShopingCartComponent } from './add-shoping-cart.component';

describe('AddShopingCartComponent', () => {
  let component: AddShopingCartComponent;
  let fixture: ComponentFixture<AddShopingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShopingCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShopingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
