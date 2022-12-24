import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PaymentApiService } from './payment-api.service';

describe('PaymentApiService', () => {
  let service: PaymentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PaymentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
