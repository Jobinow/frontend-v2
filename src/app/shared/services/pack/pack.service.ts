import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pack } from '@app/core/models/pack';
import { environment } from 'environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackService {

  constructor(private _http: HttpClient) { }

  public getAllPacks(): Observable<Pack[]> {
    return this._http.get<Pack[]>(`${environment.API_URL}/packs/all`);
  }
}
