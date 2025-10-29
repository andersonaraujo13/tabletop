import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { tabletopGuard } from './tabletop.guard';

describe('tabletopGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => tabletopGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
