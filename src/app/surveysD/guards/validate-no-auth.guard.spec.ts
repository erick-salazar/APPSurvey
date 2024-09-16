import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { validateNoAuthGuard } from './validate-no-auth.guard';

describe('validateNoAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => validateNoAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
