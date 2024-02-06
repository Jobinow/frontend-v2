import { inject } from "@angular/core";
import { JobOfferService } from "@shared/services";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { jobOffersPageActions } from "./actions/jobOffers-page.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { jobOffersApiActions } from "./actions/jobOffers-api.actions";

export const loadJobOffersEffect = createEffect((
    actions$ = inject(Actions),
    jobOfferService = inject(JobOfferService)
) => {
    return actions$.pipe(
        ofType(jobOffersPageActions.enter),
        exhaustMap((action) => {
            return jobOfferService.readAll(action.page).pipe(
                map((jobOffers: any) => {
                    return jobOffersApiActions.jobOffersLoadedSuccess({ 
                        jobOffers: jobOffers.content, 
                        pageInfo: {
                            currentPage: jobOffers.number, 
                            first: jobOffers.first, 
                            last: jobOffers.last, 
                            totalElements: jobOffers.totalElements, 
                            totalPages: jobOffers.totalPages
                        } 
                    });
                }),
                catchError((error) => {
                    return of(jobOffersApiActions.jobOffersLoadedFailure({errors: error}));
                })
            )
        })
    )
}, {functional: true})