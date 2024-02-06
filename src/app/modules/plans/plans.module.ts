import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './pages/plans/plans.component';
import { PlanCardComponent } from './components/plan-card/plan-card.component';
import { SharedModule } from '@app/shared/shared.module';
import { CheckoutComponent } from './pages/checkout/checkout.component';



@NgModule({
  declarations: [
    PlansComponent,
    PlanCardComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PlansModule { }
