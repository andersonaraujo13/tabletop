import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { OAuthService } from '../service/common/oauth.service';

export const OAuthGuard: CanActivateFn = (route, state): boolean | UrlTree => {
  const router = inject(Router);
  const oauth = inject(OAuthService);

  //return true;

  if(oauth.isAuthenticated()){
    return true;
  }

  return router.parseUrl('/support/unauthorized');
};
