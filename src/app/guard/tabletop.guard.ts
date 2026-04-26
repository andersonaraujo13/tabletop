import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

export const tabletopGuard: CanActivateFn = (route, state): boolean | UrlTree => {
  const router = inject(Router);

  return router.parseUrl('/support/unauthorized');
};
