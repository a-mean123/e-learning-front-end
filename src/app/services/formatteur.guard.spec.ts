import { TestBed } from '@angular/core/testing';

import { FormatteurGuard } from './formatteur.guard';

describe('FormatteurGuard', () => {
  let guard: FormatteurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FormatteurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
