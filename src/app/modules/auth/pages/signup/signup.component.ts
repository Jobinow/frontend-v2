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
  role:string = this.access.USER;
  isSubmitting = this._store.selectSignal(selectIsSubmitting);
  formInputs = {
    name: {
      id: 'fulName',
      name: 'fullName',
      type: 'text',
      value: '',
      placeholder: 'Full Name',
      label: 'Full Name',
      formControll: 'fullName',
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
    phone: {
      id: 'phone',
      name: 'phone',
      type: 'tele',
      value: '',
      placeholder: 'Phone Number',
      label: 'Phone Number',
      formControll: 'phone',
      onChange: "",
      required: true
    },
    address: {
      id: 'address',
      name: 'address',
      type: 'text',
      value: '',
      placeholder: 'Address',
      label: 'Address',
      formControll: 'address',
      onChange: "",
      required: true
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
      fullName: this.formInputs.name.value,
      address: this.formInputs.address.value,
      email: this.formInputs.email.value,
      password: this.formInputs.password.value,
      phoneNumber: this.formInputs.phone.value,
      role: this.role
    };
    if (registerRequest.role === this.access.RECRUITER) registerRequest.image = this.file;
    this._store.dispatch(authPageActions.register(registerRequest))
  }
}
