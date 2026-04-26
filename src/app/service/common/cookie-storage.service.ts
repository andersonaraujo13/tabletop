import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../class/common/user.class';

@Injectable({
  providedIn: 'root',
})
export class CookieStorageService {
  private service = inject(CookieService);

  public setUser(user: string) {
    this.service.set('user', JSON.stringify(this.parser(user)));
  }

  public getUser(): User {
    return Object.assign(new User(), JSON.parse(this.service.get('user')));
  }

  private parser(user: string): User {
    let parseData: any = JSON.parse(user);
    return new User(
      parseData.isAuthenticated,
      parseData.userData,
      parseData.accessToken,
      parseData.idToken,
      parseData.configId,
      parseData.errorMessage
    );
  }
}
