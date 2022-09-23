import { TestBed } from '@angular/core/testing';

import { UserComponentApiService } from './user-component-api.service';

describe('UserComponentApiService', () => {
  let service: UserComponentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserComponentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
