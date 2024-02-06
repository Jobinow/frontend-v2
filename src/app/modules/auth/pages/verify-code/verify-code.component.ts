import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Access } from '@app/core/enums/access';
import { AuthResponse } from '@app/core/interfaces/responses/auth-response.interface';
import { VerificationCode } from '@app/core/models/verification-code';
import { selectUser } from '@app/ngrx/auth/auth.reducer';
import { RecruiterService } from '@app/shared/services';
import { InputType } from '@app/shared/types';
import { Store } from '@ngrx/store';
import { Stripe } from '@stripe/stripe-js';
import { skip } from 'rxjs';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.less']
})
export class VerifyCodeComponent implements OnInit {
  constructor(private _router: Router, private _store: Store) {}
  currentUser!: AuthResponse | null;
  message = "";


  ngOnInit(): void {
    this._store.select(selectUser).subscribe(user => {
      if (user) {
        if (user.verified) this.message = "Your Account is Verified Successfully"
        this.currentUser = (user as AuthResponse);
      }
    })
  }


  submitForm = () => {
    if (this.currentUser?.verified) {
      if (this.currentUser.role?.includes(Access.RECRUITER)) this._router.navigateByUrl("/recruiter");
      else this._router.navigateByUrl("/");
    } else {
      this.message = "Your account is not Verified";
    }
  }
}
