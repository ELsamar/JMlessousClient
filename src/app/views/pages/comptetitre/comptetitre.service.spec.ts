import { TestBed } from '@angular/core/testing';

import { ComptetitreService } from './comptetitre.service';

describe('ComptetitreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComptetitreService = TestBed.get(ComptetitreService);
    expect(service).toBeTruthy();
  });
});
