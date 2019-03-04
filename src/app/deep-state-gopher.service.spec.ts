import { TestBed } from '@angular/core/testing';

import { DeepStateGopherService } from './deep-state-gopher.service';

describe('DeepStateGopherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  fit('should be created', () => {
    const service: DeepStateGopherService = TestBed.get(DeepStateGopherService);
    expect(service).toBeTruthy();
  });
});
