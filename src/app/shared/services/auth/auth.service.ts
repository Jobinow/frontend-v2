import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequestInterface } from '@app/core/interfaces/requests/login-request.interface';
import { RegisterRequestInterface } from '@core/interfaces/requests/register-request.interface';
import { AuthResponse } from '@core/interfaces/responses/auth-response.interface';
import { environment } from 'environments/environment.development';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private _http: HttpClient, private _router: Router) { }

  isAuthenticated: boolean = false;
  roles: any;
  username!: string | undefined;
  accessToken!: string | undefined;

  public register(body: RegisterRequestInterface): Observable<AuthResponse> {
    
    const formData: FormData = new FormData();
    formData.append("fullName", body.fullName);
    formData.append("email", body.email);
    formData.append("phoneNumber", body.phoneNumber);
    formData.append("password", body.password);
    formData.append("address", body.address);
    formData.append("role", body.role);
    if (body.image) formData.append("image", body.image);
    
    return this._http.post<AuthResponse>(`${environment.API_URL}/auth/register`, formData);
  }

  public login(body: LoginRequestInterface): Observable<AuthResponse> {
    return this._http.post<AuthResponse>(`${environment.API_URL}/auth/authenticate`, body);
  }

  public verifyAccount(id: string, code: string): Observable<AuthResponse> {
    return this._http.post<AuthResponse>(`${environment.API_URL}/auth/${id}/verify-account/${code}`, null);
  }
}
