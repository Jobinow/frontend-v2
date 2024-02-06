import { inject } from "@angular/core";
import { PackService } from "@app/shared/services/pack/pack.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { plansPageActions } from "./actions/plans-page.actions";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { plansApiActions } from "./actions/plans-api.actions";
import { HttpErrorResponse } from "@angular/common/http";

export const loadPlansEffect = createEffect((
    actions$ = inject(Actions),
    packService = inject(PackService)
) => {
    return actions$.pipe(
        ofType(plansPageActions.enter),
        exhaustMap(() => {
            return packService.getAllPacks().pipe(
                map((packs) => {
                    return plansApiActions.plansLoadedSuccess({plans: packs})
                }),
                catchError((errorResponse: HttpErrorResponse) => {
                    return of(plansApiActions.plansLoadedFailure({errors: errorResponse.error}))
                })
            )
        })
    )
}, {functional: true})