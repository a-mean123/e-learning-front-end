import { TestBed } from '@angular/core/testing';

import { EtudiantGuard } from './etudiant.guard';

describe('EtudiantGuard', () => {
  let guard: EtudiantGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EtudiantGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
