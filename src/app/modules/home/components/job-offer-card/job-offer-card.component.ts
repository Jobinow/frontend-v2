import { Component, Input } from '@angular/core';
import { JobOffer } from '@app/core/models/job-offer';
import { jobOffersPageActions } from '@app/ngrx/jobOffers/actions/jobOffers-page.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-job-offer-card',
  templateUrl: './job-offer-card.component.html',
  styleUrls: ['./job-offer-card.component.less']
})
export class JobOfferCardComponent {
  @Input() offer!: any;

  constructor(private _store: Store) {}

  selectJobOffer() {
    this._store.dispatch(jobOffersPageActions.selectJob({jobOffer: this.offer}));
  }
}
