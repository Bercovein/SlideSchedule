import { TestBed } from '@angular/core/testing';

import { ClassRoomService } from './classroom-service.service';

describe('ClassroomServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassRoomService = TestBed.get(ClassRoomService);
    expect(service).toBeTruthy();
  });
});
