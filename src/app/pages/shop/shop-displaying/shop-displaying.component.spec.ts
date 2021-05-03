import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDisplayingComponent } from './shop-displaying.component';

describe('ShopDisplayingComponent', () => {
  let component: ShopDisplayingComponent;
  let fixture: ComponentFixture<ShopDisplayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopDisplayingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDisplayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
