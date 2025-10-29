import { Routes } from '@angular/router';
import { tabletopGuard } from '../../guard/tabletop.guard';

export const routes: Routes = [
  {
   path:':id',
   title: 'Sonhonauta',
   loadComponent: () => import('./tabletop/tabletop.component'),
   canActivate: [tabletopGuard]
  },
];
