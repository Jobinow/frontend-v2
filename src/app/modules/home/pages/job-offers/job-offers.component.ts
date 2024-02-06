import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobOffer } from '@app/core/models/job-offer';
import { jobOffersPageActions } from '@app/ngrx/jobOffers/actions/jobOffers-page.actions';
import { selectCollection, selectPageInfo, selectSelectedJob } from '@app/ngrx/jobOffers/jobOffers.reducer';
import { JobOfferService } from '@app/shared/services/job-offer/job-offer.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.less']
})
export class JobOffersComponent implements OnInit {
  constructor(private _activatedRoute: ActivatedRoute, private _store: Store) {}

  jobOffers = this._store.selectSignal(selectCollection);
  jobOffersPagination = this._store.selectSignal(selectPageInfo);
  jobOffer = this._store.selectSignal(selectSelectedJob);

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(({page}) => {
      this._store.dispatch(jobOffersPageActions.enter({page: page}));
    })
  }
}
