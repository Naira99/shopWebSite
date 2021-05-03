import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsHeaderComponent } from './faqs-header.component';

describe('FaqsHeaderComponent', () => {
  let component: FaqsHeaderComponent;
  let fixture: ComponentFixture<FaqsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
