import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { jobOffersPageActions } from '@app/ngrx/jobOffers/actions/jobOffers-page.actions';
import { selectCollection, selectPageInfo } from '@app/ngrx/jobOffers/jobOffers.reducer';
import { selectRecruiterOffers } from '@app/ngrx/jobOffers/jobOffers.selectors';
import { JobOfferService } from '@app/shared/services/job-offer/job-offer.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.less']
})
export class JobsListComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _store: Store) { }

  tableColumns = ['title', 'description', 'profile', 'address', 'educationalLevel', 'salary', 'status'];

  jobOffers = this._store.selectSignal(selectRecruiterOffers);
  jobOffersPagination = this._store.selectSignal(selectPageInfo);

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(({ page }) => {
      this._store.dispatch(jobOffersPageActions.enter({ page: page }));
    })
  }
}
