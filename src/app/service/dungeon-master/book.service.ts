import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from '../../class/dungeon-master/book.class';
import { ApiService } from '../common/api.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly api = inject(ApiService);

  public findAllByDungeonMaster():Observable<Book[]> {
    return this.api.get<Book[]>('/dungeon-master/book').pipe(
        map(books => books.map(book => new Book(book.id, book.description)))
    );
  }

}
