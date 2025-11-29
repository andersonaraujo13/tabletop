import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'public/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'public/home',
    pathMatch: 'full'
  },
  {
    path: 'dungeon-master',
    loadChildren: () =>
      import('./dungeon-master/dungeon-master.routes').then((r) => r.routes),
  },
  {
    path: 'campaign',
    loadChildren: () =>
      import('./campaign/campaign.routes').then((r) => r.routes),
  },
  {
    path: 'public',
    loadChildren: () =>
      import('./public/public.routes').then((r) => r.routes),
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./support/support.routes').then((r) => r.routes),
  },
  {
    path: '**',
    redirectTo: 'support/not-found',
  },
];

