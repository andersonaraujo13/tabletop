import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <header style="display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;background:#121212;color:#fff;">
    <div>{{ title }}</div>
    <div>
        <button (click)="login()" style="margin-right:0.5rem;">Login</button>
        <button (click)="logout()" style="margin-right:0.5rem;">Logout</button>
        <button (click)="request()">Requisitar</button>
      </div>
    </header>
    <main style="padding:1rem">
      <section style="margin-bottom:1rem;background:#f8f9fa;padding:1rem;border-radius:6px">
        <h3>Token Debug</h3>
        <div style="display:flex;gap:1rem;align-items:flex-start;">
          <div style="flex:1;min-width:300px">
            <label><strong>Access Token</strong></label>
            <textarea readonly rows="4" style="width:100%">{{ token }}</textarea>
          </div>
          <div style="flex:1;min-width:300px">
            <label><strong>Decoded Claims</strong></label>
            <pre style="background:#fff;padding:0.5rem;border-radius:4px;max-height:160px;overflow:auto">{{ claims | json }}</pre>
            <div style="margin-top:0.5rem"><strong>Status:</strong> <span>{{ requestStatus }}</span></div>
            <div style="margin-top:0.5rem"><label><strong>Response</strong></label>
              <pre style="background:#fff;padding:0.5rem;border-radius:4px;max-height:160px;overflow:auto">{{ responseBody }}</pre>
            </div>
          </div>
        </div>
      </section>
      <router-outlet></router-outlet>
    </main>
  `
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
