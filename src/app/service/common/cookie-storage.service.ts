import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../class/common/user.class';

@Injectable({
  providedIn: 'root',
})
export class CookieStorageService {
  private readonly service = inject(CookieService);

  public setUser(user: string) {
    this.service.set('user', JSON.stringify(this.parser(user)));
  }

  public getUser(): User {
    const storedUser = this.service.get('user');

    return storedUser
      ? Object.assign(new User(), JSON.parse(storedUser))
      : new User();
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
