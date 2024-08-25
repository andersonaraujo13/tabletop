import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'campaign',
    loadChildren: () =>
      import('./campaign/campaign.routes').then((r) => r.routes),
  },
  {
    path: '**',
    loadComponent: () => import('./support/not-found/not-found.component'),
  },
];
