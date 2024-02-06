import { createSelector } from "@ngrx/store";
import { selectCollection } from "./jobOffers.reducer";
import { selectUser } from "../auth/auth.reducer";

export const selectRecruiterOffers = createSelector(
    selectCollection,
    selectUser,
    (collection, user) => {
        return collection?.filter((offer) => offer.recruiter.email === user?.email)
    }
)