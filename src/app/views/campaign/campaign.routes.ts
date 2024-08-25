import { Routes } from '@angular/router';

export const routes: Routes = [
  {
   path:':id',
   title:'',
   loadComponent: () => import('./tabletop/tabletop.component'),
  },
];
