import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { paymentFeatureKey, paymentReducer } from "./payment.reducer";
import { EffectsModule } from "@ngrx/effects";
import * as paymentEffects from "./payment.effects";

@NgModule({
    imports: [
        StoreModule.forFeature(paymentFeatureKey, paymentReducer),
        EffectsModule.forFeature(paymentEffects)
    ]
})
export class PaymentStateModule {}