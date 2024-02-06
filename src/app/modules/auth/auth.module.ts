import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthComponent } from '@modules/auth/pages/auth/auth.component';
import { SignupComponent } from '@modules/auth/pages/signup/signup.component';
import { SharedModule } from '@app/shared/shared.module';
import { VerifyCodeComponent } from '@modules/auth/pages/verify-code/verify-code.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { VerifyAccountComponent } from './pages/verify-account/verify-account.component';



@NgModule({
  declarations: [
    AuthComponent,
    SignupComponent,
    VerifyCodeComponent,
    LoginComponent,
    VerifyAccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
