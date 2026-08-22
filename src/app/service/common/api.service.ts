import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CookieStorageService } from './cookie-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly cookieStorage = inject(CookieStorageService);

  public get<T>(path: string): Observable<T> {
    return this.http.get<T>(this.buildUrl(path), {
      headers: this.getAuthorizationHeaders(),
    });
  }

  public post<TResponse, TBody>(path: string, body: TBody): Observable<TResponse> {
    return this.http.post<TResponse>(this.buildUrl(path), body, {
      headers: this.getAuthorizationHeaders(),
    });
  }

  private buildUrl(path: string): string {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${environment.servers.apiUrl}${normalizedPath}`;
  }

  private getAuthorizationHeaders(): HttpHeaders {
    const accessToken = this.cookieStorage.getUser().getAccessToken();

    return accessToken
      ? new HttpHeaders({ Authorization: `Bearer ${accessToken}` })
      : new HttpHeaders();
  }
}
