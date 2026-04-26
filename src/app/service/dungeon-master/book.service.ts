import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from '../../class/dungeon-master/book.class';
import { CookieStorageService } from '../common/cookie-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private cookieService = inject(CookieStorageService);
  private httpService = inject(HttpClient);

  public findAllByDungeonMaster():Observable<Book[]> {
    let token: string = this.cookieService.getUser().getAccessToken();
    let headers = new HttpHeaders({ Authorization: 'Bearer ' + token });

    return this.httpService.get<Book[]>('http://localhost:28080/dungeon-master/book', { headers, observe: 'response', responseType: 'json' }).pipe(
        map(response => (response.body ?? []).map(book => new Book(book.id, book.description)))
    );
  }

}
