import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { authFeatureKey, authReducer } from "./auth.reducer";
import { EffectsModule } from "@ngrx/effects";
import * as registerEffects from "./auth.effects";
import { metaReducers } from ".";

@NgModule({
    imports: [
        StoreModule.forFeature(authFeatureKey, authReducer, {
            metaReducers: metaReducers, 
        }),
        EffectsModule.forFeature(registerEffects)
    ]
})
export class AuthStateModule {}