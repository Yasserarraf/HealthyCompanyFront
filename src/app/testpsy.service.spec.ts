import { TestBed } from '@angular/core/testing';

import { TestpsyService } from './testpsy.service';

describe('TestpsyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestpsyService = TestBed.get(TestpsyService);
    expect(service).toBeTruthy();
  });
});
