import { JobOffer } from "@app/core/models/job-offer";
import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const jobOffersPageActions = createActionGroup({
    source: "Job Offers Page",
    events: {
        enter: props<{page: number}>(),
        selectJob: props<{jobOffer: JobOffer}>()
    }
})