import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { selectIsLoggedIn, selectUser } from '@app/ngrx/auth/auth.reducer';
import { Store } from '@ngrx/store';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const store: Store = inject(Store);
  const isLoggedIn = store.selectSignal(selectIsLoggedIn);
  const user = store.selectSignal(selectUser);

  if (isLoggedIn() && user()) {
    return true;
  }
  router.navigate(["/auth/login"]);
  return false;
};
