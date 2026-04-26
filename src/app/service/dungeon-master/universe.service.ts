import { inject, Injectable } from '@angular/core';
import { CookieStorageService } from '../common/cookie-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Universe } from '../../class/dungeon-master/universe.class';

@Injectable({
  providedIn: 'root',
})
export class UniverseService {
  private cookieService = inject(CookieStorageService);
  private httpService = inject(HttpClient);

  public save(universe: Universe)  {
    let token: string = this.cookieService.getUser().getAccessToken();
    let headers = new HttpHeaders({ Authorization: 'Bearer ' + token });

    this.httpService.post('http://localhost:28080/dungeon-master/book', universe, { headers, observe: 'response', responseType: 'json' }).pipe(
      catchError(error => {
        console.error('There was an error!', error);
        return throwError(() => new Error(error.message));
      }));
  }

}
