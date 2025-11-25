import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    importProvidersFrom(
      AuthModule.forRoot({
        config: {
          authority: 'http://127.0.0.1:18080',
          redirectUrl: 'http://localhost:4200/login/oauth2/code/rpg-table-top',
          postLogoutRedirectUri: 'http://localhost:4200/login/oauth2/code/rpg-table-top',
          clientId: 'rpg-table-top',
          scope: 'openid profile',
          responseType: 'code',
          silentRenew: true,
          useRefreshToken: true,
          logLevel: LogLevel.Debug,
        },
      })
    ),
  ],
};
