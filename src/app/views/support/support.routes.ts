import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'unauthorized',
    loadComponent: () => import('./unauthorized/unauthorized.component'),
  },
  {
    path: 'not-found',
    loadComponent: () => import('./not-found/not-found.component'),
  },
];
