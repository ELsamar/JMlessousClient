import { TestBed } from '@angular/core/testing';

import { CompteepargneService } from './compteepargne.service';

describe('CompteepargneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompteepargneService = TestBed.get(CompteepargneService);
    expect(service).toBeTruthy();
  });
});
