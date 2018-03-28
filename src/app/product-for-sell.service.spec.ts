import { TestBed, inject } from '@angular/core/testing';

import { ProductForSellService } from './product-for-sell.service';

describe('ProductForSellService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductForSellService]
    });
  });

  it('should be created', inject([ProductForSellService], (service: ProductForSellService) => {
    expect(service).toBeTruthy();
  }));
});
