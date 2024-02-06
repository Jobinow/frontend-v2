import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { plansFeatureKey, plansReducer } from "./plans.reducer";
import { EffectsModule } from "@ngrx/effects";
import * as plansEffects from "./plans.effects";

@NgModule({
    imports: [
        StoreModule.forFeature(plansFeatureKey, plansReducer),
        EffectsModule.forFeature(plansEffects)
    ]
})
export class PlansStateModule {}