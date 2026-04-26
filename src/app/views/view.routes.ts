import { Routes } from '@angular/router';
import { OAuthGuard } from '../guard/oauth.guard';

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
    path: 'login/oauth2/code/rpg-table-top',
    redirectTo: 'dungeon-master',
    pathMatch: 'full'
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
    path: 'dungeon-master',
    loadChildren: () => import('./dungeon-master/dungeon-master.routes').then((r) => r.routes),
    canActivate: [ OAuthGuard ]
  },
  {
    path: 'campaign',
    loadChildren: () => import('./campaign/campaign.routes').then((r) => r.routes),
    canActivate: [ OAuthGuard ]
  },
  {
    path: '**',
    redirectTo: 'support/not-found',
  },
];

