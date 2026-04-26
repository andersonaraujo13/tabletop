import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection, } from '@angular/core';
import { provideRouter } from '@angular/router';
import Preset from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { routes } from './app.routes';

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
          authority: 'http://127.0.0.1:18080',
          redirectUrl: 'http://localhost:4200/login/oauth2/code/rpg-table-top',
          postLogoutRedirectUri:
            'http://localhost:4200/login/oauth2/code/rpg-table-top',
          clientId: 'rpg-table-top',
          scope: 'openid profile offline_access',
          responseType: 'code',
          silentRenew: true,
          useRefreshToken: true,
          logLevel: LogLevel.Debug,
        },
      })
    ),
  ],
};
