import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitusComponent } from './visitus.component';

describe('VisitusComponent', () => {
  let component: VisitusComponent;
  let fixture: ComponentFixture<VisitusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
