export const environment = {
  production: false,
  servers: {
    apiUrl: 'http://localhost:28080',
    socketUrl: 'http://localhost:3000',
    identityUrl: 'http://127.0.0.1:18080',
  },
  authentication: {
    clientId: 'rpg-table-top',
    redirectUrl: 'http://localhost:4200/login/oauth2/code/rpg-table-top',
    scope: 'openid profile offline_access',
  },
} as const;
