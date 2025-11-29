import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title: 'Sonhonauta';
  private readonly oidcSecurityService = inject(OidcSecurityService);
  private http = inject(HttpClient);
  token: string | null = null;
  claims: any = null;
  requestStatus: string | null = null;
  responseBody: string | null = null;


  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData }) => console.log( isAuthenticated, userData ));
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff().subscribe((result) => console.info(result));
  }

  request(){
    this.requestStatus = 'Obtendo token...';
    this.responseBody = null;
    this.oidcSecurityService.getAccessToken().subscribe({
      next: (token) => {
        this.token = token ?? null;
        this.claims = this.decodeToken(token);
        if (!token) {
          this.requestStatus = 'Sem token — redirecionando para login';
          this.oidcSecurityService.authorize();
          return;
        }

        const headers = new HttpHeaders({ Authorization: 'Bearer ' + token });
        this.requestStatus = 'Chamando /home...';
        this.http.get('http://localhost:28080/home', { headers, observe: 'response', responseType: 'text' }).subscribe({
          next: (resp) => {
            this.requestStatus = `OK ${resp.status}`;
            this.responseBody = typeof resp.body === 'string' ? resp.body : JSON.stringify(resp.body);
          },
          error: (err) => {
            if (err?.status === 401) {
              this.requestStatus = '401 Unauthorized';
            } else {
              this.requestStatus = `Erro ${err?.status ?? '??'}`;
            }
            // show readable error body when available
            const errBody = err?.error;
            if (typeof errBody === 'string') this.responseBody = errBody;
            else if (errBody) this.responseBody = JSON.stringify(errBody);
            else this.responseBody = null;
            console.error('Request error', err);
          }
        });
      },
      error: (err) => {
        this.requestStatus = 'Erro ao obter token';
        console.error('Failed to get access token', err);
      }
    });

  }

  decodeToken(token?: string | null){
    if (!token) return null;
    try {
      const parts = token.split('.');
      if (parts.length < 2) return null;
      const payload = parts[1];
      // atob may break on URL-safe base64, replace chars
      const b64 = payload.replace(/-/g, '+').replace(/_/g, '/');
      const json = decodeURIComponent(Array.prototype.map.call(atob(b64), function(c:any) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(json);
    } catch (e) {
      console.error('Failed to decode token', e);
      return null;
    }
  }
}
