import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { jobOffersFeatureKey, jobOffersReducer } from "./jobOffers.reducer";
import { EffectsModule } from "@ngrx/effects";
import * as jobOffersEffects from "./jobOffers.effects";

@NgModule({
    imports: [
        StoreModule.forFeature(jobOffersFeatureKey, jobOffersReducer),
        EffectsModule.forFeature(jobOffersEffects)
    ]
})
export class JobOffersStateModule {}