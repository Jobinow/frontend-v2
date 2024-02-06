import { JobOffer } from "@app/core/models/job-offer";
import { createActionGroup, props } from "@ngrx/store";
import { PageInfo } from "../jobOffersState.interface";

export const jobOffersApiActions = createActionGroup({
    source: "Job Offers Api",
    events: {
        jobOffersLoadedSuccess: props<{jobOffers: JobOffer[], pageInfo: PageInfo}>(),
        jobOffersLoadedFailure: props<{errors: {}}>()
    }
})