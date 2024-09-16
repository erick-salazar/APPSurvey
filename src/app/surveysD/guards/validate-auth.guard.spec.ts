import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { validateAuthGuard } from './validate-auth.guard';

describe('validateAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => validateAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
