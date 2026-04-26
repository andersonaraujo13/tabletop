import { Component, inject } from '@angular/core';
import { OAuthService } from '../../../../service/common/oauth.service';
import { BookService } from '../../../../service/dungeon-master/book.service';

@Component({
  imports: [],
  templateUrl: './home-desktop.component.html',
  styleUrl: './home-desktop.component.scss',
})
export default class HomeDesktopComponent {
  private oauthService = inject(OAuthService);
  private bookService = inject(BookService);

  public login(){
    this.oauthService.login();
  }

  public testar(){
    this.bookService.findAllByDungeonMaster().subscribe(books =>{
      console.log(books);
    });
  }
}
