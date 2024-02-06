import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recruiter } from '@app/core/models/recruiter';
import { environment } from 'environments/environment.development';
import { VerificationCode } from '@app/core/models/verification-code';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

  constructor(private _http: HttpClient) { }

  public readAll(): Observable<Recruiter[]> {
    return this._http.get<Recruiter[]>(`${environment.API_URL}/recruiters`);
  }

  public create(body: any): Observable<Recruiter> {
    console.log(body);
    
    return this._http.post<Recruiter>(`${environment.API_URL}/recruiters/create`, body);
  }

  public verifyAccount(body: VerificationCode): Observable<Recruiter> {
    return this._http.post<Recruiter>(`${environment.API_URL}/auth/verify-account`, body);
  }
}
