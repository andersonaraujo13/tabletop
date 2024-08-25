import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/view.routes').then((r) => r.routes),
  },
];
