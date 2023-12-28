import { TestBed } from '@angular/core/testing';

import { BaseReadService } from './base-read.service';

describe('BaseReadOnlyService', () => {
  let service: BaseReadService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseReadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
