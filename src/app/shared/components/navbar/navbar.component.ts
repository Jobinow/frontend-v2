import { Component, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { authPageActions } from '@app/ngrx/auth/actions/auth-page.actions';
import { selectIsLoggedIn } from '@app/ngrx/auth/auth.reducer';
import { AuthService } from '@app/shared/services/auth/auth.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {

  constructor(private _authService: AuthService, private _router: Router, private _store: Store) {}

  logo: string = "../../../../assets/img/logo.png";

  isUserLoggedin: Signal<boolean> = this._store.selectSignal(selectIsLoggedIn);

  isMainMenuOpen: boolean = false;
  isProfileDropDownOpen: boolean = false;

  handleDropDown() {
    this.isProfileDropDownOpen = !this.isProfileDropDownOpen;
  }

  handleLogOut = () => {
    this._store.dispatch(authPageActions.logout())
  }

  login = () => {}
}
