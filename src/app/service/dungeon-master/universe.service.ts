import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Universe } from '../../class/dungeon-master/universe.class';
import { ApiService } from '../common/api.service';

@Injectable({
  providedIn: 'root',
})
export class UniverseService {
  private readonly api = inject(ApiService);

  public save(universe: Universe): Observable<unknown> {
    return this.api.post<unknown, Universe>('/dungeon-master/universe', universe).pipe(
      catchError(error => {
        console.error('There was an error!', error);
        return throwError(() => error);
      }),
    );
  }
}
