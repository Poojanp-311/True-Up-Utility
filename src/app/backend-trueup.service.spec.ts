import { TestBed } from '@angular/core/testing';

import { BackendTrueupService } from './backend-trueup.service';

describe('BackendTrueupService', () => {
  let service: BackendTrueupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendTrueupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
