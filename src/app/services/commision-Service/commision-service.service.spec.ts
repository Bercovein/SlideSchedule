import { TestBed } from '@angular/core/testing';

import { CommisionService } from './commision-service.service';

describe('CommisionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommisionService = TestBed.get(CommisionService);
    expect(service).toBeTruthy();
  });
});
