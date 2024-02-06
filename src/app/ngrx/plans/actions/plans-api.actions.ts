import { BackendErrorsInterface } from "@app/core/interfaces/backend-errors.interface";
import { Pack } from "@app/core/models/pack";
import { createActionGroup, props } from "@ngrx/store";

export const plansApiActions = createActionGroup({
    source: "Plans Api",
    events: {
        plansLoadedSuccess: props<{plans: Pack[]}>(),
        plansLoadedFailure: props<{errors: {}}>()
    }
})