import { Routes } from '@angular/router';
import { validateAuthGuard } from './surveysD/guards/validate-auth.guard';
import { validateNoAuthGuard } from './surveysD/guards/validate-no-auth.guard';

export const routes: Routes = [
  {
    path: 'surveys',
    canActivate:[validateAuthGuard],
    loadComponent: ()=>import('./surveysD/pages/surveys/surveys.component'),
    children: [
      {
        path: 'welcome',
        title: 'Welcome',
        loadComponent: ()=>import('./surveysD/pages/welcome/welcome.component')
      },
      {
        path: 'list',
        title: 'Surveys',
        loadComponent: ()=>import('./surveysD/pages/suverysList/surveysList.component')
      },
      {
        path: 'new',
        title: 'New survey',
        loadComponent:()=>import('./surveysD/pages/surveys-new/surveys-new.component'),
      },
      {
        path: 'reports',
        title: 'Surveys reports',
        loadComponent: ()=>import('./surveysD/pages/surveys-reports/surveys-reports.component')
      },
      {
        path:'',
        redirectTo:'/surveys/welcome',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'login',
    canActivate:[validateNoAuthGuard],
    loadComponent:()=>import('./surveysD/pages/login/login.component'),
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
