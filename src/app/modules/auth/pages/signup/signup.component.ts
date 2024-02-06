import { Component } from '@angular/core';
import { Access } from '@app/core/enums/access';
import { RegisterRequestInterface } from '@app/core/interfaces/requests/register-request.interface';
import { authPageActions } from '@app/ngrx/auth/actions/auth-page.actions';
import { selectIsSubmitting } from '@app/ngrx/auth/auth.reducer';
import { AuthStateInterface } from '@app/ngrx/auth/authState.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent {

  constructor(private _store: Store<{ auth: AuthStateInterface }>) { }
  access = Access;
  file!: File;
  role:string = this.access.JOB_SEEKER;
  isSubmitting = this._store.selectSignal(selectIsSubmitting);
  formInputs = {
    firstName: {
      id: 'firstName',
      name: 'firstName',
      type: 'text',
      value: '',
      placeholder: 'First Name',
      label: 'First Name',
      formControll: 'firstName',
      onChange: "",
      required: true,
      error: ""
    },
    lastName: {
      id: 'lastName',
      name: 'lastName',
      type: 'text',
      value: '',
      placeholder: 'Last Name',
      label: 'Last Name',
      formControll: 'lastName',
      onChange: "",
      required: true,
      error: ""
    },
    email: {
      id: 'email',
      name: 'email',
      type: 'email',
      value: '',
      placeholder: 'Email',
      label: 'Email',
      formControll: 'email',
      onChange: "",
      required: true,
      error: ""
    },
    password: {
      id: 'password',
      name: 'password',
      type: 'password',
      value: '',
      placeholder: 'Password',
      label: 'Password',
      formControll: 'password',
      onChange: "",
      required: true,
      error: ""
    },
    confirmationPassword: {
      id: 'confirmationPassword',
      name: 'Confirmation Password',
      type: 'password',
      value: '',
      placeholder: 'Confirmation Password',
      label: 'Confirmation Password',
      formControll: 'confirmationPassword',
      onChange: "",
      required: true,
      error: ""
    },
    file: {
      id: 'file',
      name: 'file',
      type: 'file',
      value: '',
      placeholder: 'Image',
      label: 'Image',
      formControll: 'Image',
      onChange: "",
      required: true
    }
  }

  uploadFile(file: any) {
    this.file = file;
  }

  signUp = () => {
    const registerRequest: RegisterRequestInterface = {
      firstName: this.formInputs.firstName.value,
      lastName: this.formInputs.lastName.value,
      email: this.formInputs.email.value,
      password: this.formInputs.password.value,
      confirmationPassword: this.formInputs.confirmationPassword.value,
      role: this.role
    };
    // if (registerRequest.role === this.access.RECRUITER) registerRequest.image = this.file;
    this._store.dispatch(authPageActions.register(registerRequest))
  }
}
