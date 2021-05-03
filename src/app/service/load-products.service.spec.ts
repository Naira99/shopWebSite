import { TestBed } from '@angular/core/testing';

import { LoadProductsService } from './load-products.service';

describe('LoadProductsService', () => {
  let service: LoadProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
