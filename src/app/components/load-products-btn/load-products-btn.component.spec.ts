import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadProductsBtnComponent } from './load-products-btn.component';

describe('LoadProductsBtnComponent', () => {
  let component: LoadProductsBtnComponent;
  let fixture: ComponentFixture<LoadProductsBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadProductsBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadProductsBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
