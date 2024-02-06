import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequestInterface } from '@app/core/interfaces/requests/login-request.interface';
import { Tokens } from '@app/core/interfaces/responses/tokens.interface';
import { RegisterRequestInterface } from '@core/interfaces/requests/register-request.interface';
import { AuthResponse } from '@core/interfaces/responses/auth-response.interface';
import { environment } from 'environments/environment.development';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient, private _router: Router) {}

  isAuthenticated: boolean = false;
  roles: any;
  username!: string | undefined;
  accessToken!: string | undefined;

  public register(body: RegisterRequestInterface): Observable<Tokens> {
    const requestBody: any = {
      firstname: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: body.password,
      confirmationPassword: body.confirmationPassword,
      role: body.role,
    };

    // const formData: FormData = new FormData();
    // formData.append('fullName', body.fullName);
    // formData.append('email', body.email);
    // formData.append('phoneNumber', body.phoneNumber);
    // formData.append('password', body.password);
    // formData.append('address', body.address);
    // formData.append('role', body.role);
    // if (body.image) formData.append('image', body.image);

    let endPoint = '', role = body.role;

    if (role == 'RECRUITER') endPoint = '/recruiter';
    else if (role == 'JOB_SEEKER') endPoint = '/job-seeker';

    console.log('current end point: ' + endPoint);
    console.log(requestBody);

    return this._http.post<Tokens>(
      `${environment.API_URL}/auth/register${endPoint}`,
      requestBody
    );
  }

  public login(body: LoginRequestInterface): Observable<Tokens> {
    return this._http.post<Tokens>(
      `${environment.API_URL}/auth/authenticate`,
      body
    );
  }

  public verifyAccount(id: string, code: string): Observable<AuthResponse> {
    return this._http.post<AuthResponse>(
      `${environment.API_URL}/auth/${id}/verify-account/${code}`,
      null
    );
  }
}
