import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pack } from '@app/core/models/pack';
import { plansPageActions } from '@app/ngrx/plans/actions/plans-page.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.less']
})
export class PlanCardComponent {
  @Input() pack!: Pack;

  constructor(private _store: Store, private router: Router) {}

  selectPack = () => {
    this._store.dispatch(plansPageActions.selectPlan({ pack: this.pack }))
    this.router.navigateByUrl("/checkout");
  }
}
