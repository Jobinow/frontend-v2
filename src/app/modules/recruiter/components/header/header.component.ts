import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  logo: string = "../../../../../assets/img/logo2.png"

  constructor(private _authService: AuthService, private _router: Router) {}

  handleLogOut = () => {
    this._router.navigate(["/auth/login"]);
  }
}
