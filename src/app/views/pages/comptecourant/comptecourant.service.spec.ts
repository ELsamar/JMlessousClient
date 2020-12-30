import { TestBed } from '@angular/core/testing';

import { ComptecourantService } from './comptecourant.service';

describe('ComptecourantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComptecourantService = TestBed.get(ComptecourantService);
    expect(service).toBeTruthy();
  });
});
