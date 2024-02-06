import { Pack } from "@app/core/models/pack";
import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const plansPageActions = createActionGroup({
    source: "Plans Page",
    events: {
        enter: emptyProps(),
        selectPlan: props<{ pack: Pack }>(),
    }
})