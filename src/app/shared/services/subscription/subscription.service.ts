import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubscriptionRequestInterface } from '@app/core/interfaces/requests/subscription-reaquest.interface';
import { SubscriptionModel } from '@app/core/models/subscriptionModel';
import { environment } from 'environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private _http: HttpClient) { }

  create(body: SubscriptionRequestInterface): Observable<SubscriptionModel> {
    return this._http.post<SubscriptionModel>(`${environment.API_URL}/subscriptions/create`, body);
  }
}
