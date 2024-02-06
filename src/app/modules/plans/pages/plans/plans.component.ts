import { Component, OnInit } from '@angular/core';
import { plansPageActions } from '@app/ngrx/plans/actions/plans-page.actions';
import { selectCollection } from '@app/ngrx/plans/plans.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.less']
})
export class PlansComponent implements OnInit{

  packs = this._store.selectSignal(selectCollection);
  constructor(private _store: Store) {
  }
  
  async ngOnInit() {
    this._store.dispatch(plansPageActions.enter())
  }
}
