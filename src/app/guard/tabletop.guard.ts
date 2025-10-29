import { CanActivateFn } from '@angular/router';

export const tabletopGuard: CanActivateFn = (route, state) => {
  return true;
};
