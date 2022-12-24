import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AdminComponentApiService } from './admin-component-api.service';

describe('AdminComponentApiService', () => {
  let service: AdminComponentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(AdminComponentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
