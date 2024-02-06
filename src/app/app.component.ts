import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'MyRH-frontend';

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    // this._authService.loadTokenFromSessionStorage();
  }
}
