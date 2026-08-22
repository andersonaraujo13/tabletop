import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection, } from '@angular/core';
import { provideRouter } from '@angular/router';
import Preset from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { routes } from './app.routes';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: Preset,
        options: {
          darkModeSelector: false || 'none',
        },
      },
    }),
    importProvidersFrom(
      AuthModule.forRoot({
        config: {
          authority: environment.servers.identityUrl,
          redirectUrl: environment.authentication.redirectUrl,
          postLogoutRedirectUri: environment.authentication.redirectUrl,
          clientId: environment.authentication.clientId,
          scope: environment.authentication.scope,
          responseType: 'code',
          silentRenew: true,
          useRefreshToken: true,
          logLevel: LogLevel.Debug,
        },
      })
    ),
  ],
};
