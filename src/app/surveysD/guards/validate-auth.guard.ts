import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SurveysService } from '../services/surveys.service';
import { AuthStatus } from '../interfaces/auth-status.enum';

export const validateAuthGuard: CanActivateFn = (route, state) => {

  const surveyService = inject(SurveysService);

  if(surveyService.authStatus()===AuthStatus.authenticated) {return true;}

  const router = inject(Router);

  router.navigateByUrl('/login');

  return false;
};
