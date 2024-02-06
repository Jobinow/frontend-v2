import { inject } from "@angular/core";
import { SubscriptionService } from "@app/shared/services/subscription/subscription.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { paymentApiActions } from "./actions/payment-api.actions";
import { paymentPageActions } from "./actions/payment-page.actions";
import { catchError, concatMap, map, of } from "rxjs";
import { SubscriptionModel } from "@app/core/models/subscriptionModel";
import { HttpErrorResponse } from "@angular/common/http";

export const paymentEffect = createEffect((
    actions$ = inject(Actions),
    subscriptionService = inject(SubscriptionService)
) => {
    return actions$.pipe(
        ofType(paymentPageActions.submitPayment),
        concatMap(action => {
            return subscriptionService.create({
                subscriptionStatus: action.subscriptionStatus, 
                chargeRequest: action.chargeRequest,
                pack: action.pack,
                recruiter: action.recruiter
            }).pipe(
                map((response: SubscriptionModel) => {
                    return paymentApiActions.paymentSucess({subscription: response});
                }),
                catchError((errorResponse: HttpErrorResponse) => {
                    console.log(errorResponse);
                    
                    return of(paymentApiActions.paymentFailure({
                        errors: errorResponse.error,
                        errorMessage: { message: errorResponse.error?.body?.detail }
                    }))
                })
            )
        })
    );
}, {functional: true})