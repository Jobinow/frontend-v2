import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Access } from '@app/core/enums/access';
import { selectIsLoggedIn, selectUser } from '@app/ngrx/auth/auth.reducer';
import { AuthService } from '@app/shared/services/auth/auth.service';
import { Store } from '@ngrx/store';

export const authorizationGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const store = inject(Store);
  const user = store.selectSignal(selectUser);

  if(user()?.role?.includes(Access.RECRUITER)) {
    return true;
  }
  router.navigate(["/not-authorized"]);
  return false;
};
