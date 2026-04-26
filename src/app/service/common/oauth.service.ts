import { inject, Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { CookieStorageService } from './cookie-storage.service';

@Injectable({
  providedIn: 'root',
})
export class OAuthService {
  private readonly oidcSecurityService = inject(OidcSecurityService);
  private cookieService = inject(CookieStorageService);

  constructor(){
    this.oidcSecurityService.checkAuth().subscribe((user) => {
      this.cookieService.setUser(JSON.stringify(user));
    });
  }

  public login() {
    this.oidcSecurityService.authorize();
  }

  public logout() {
    this.oidcSecurityService.logoff().subscribe((result) => console.info(result));
  }

  public isAuthenticated(): boolean {
    return this.cookieService.getUser().getIsAuthenticated();
  }
}
