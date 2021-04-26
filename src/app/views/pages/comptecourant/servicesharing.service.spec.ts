import { TestBed } from '@angular/core/testing';

import { ServicesharingService } from './servicesharing.service';

describe('ServicesharingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesharingService = TestBed.get(ServicesharingService);
    expect(service).toBeTruthy();
  });
});
