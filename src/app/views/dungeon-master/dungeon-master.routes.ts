import { Routes } from '@angular/router';
import { tabletopGuard } from '../../guard/tabletop.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard/dashboard.component'),
  },
  {
    path: 'universe',
    loadComponent: () => import('./universe/universe.component'),
  },
  {
    path: 'universe/form',
    loadComponent: () => import('./universe-form/universe-form.component'),
  },
  {
    path: 'campaign',
    loadComponent: () => import('./campaign/campaign.component'),
  },
];
