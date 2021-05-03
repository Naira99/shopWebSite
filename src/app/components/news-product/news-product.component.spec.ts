import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsProductComponent } from './news-product.component';

describe('NewsProductComponent', () => {
  let component: NewsProductComponent;
  let fixture: ComponentFixture<NewsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
