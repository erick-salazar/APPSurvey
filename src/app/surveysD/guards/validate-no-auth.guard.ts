import { CanActivateFn, Router } from '@angular/router';
import { SurveysService } from '../services/surveys.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces/auth-status.enum';

export const validateNoAuthGuard: CanActivateFn = (route, state) => {
  const surveyService = inject(SurveysService);
  const router = inject(Router);

  if(surveyService.authStatus()===AuthStatus.authenticated) {
    router.navigateByUrl('/welcome');
    return false;
  }

  return true;
};
