import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { PaymentStateInterface } from "../paymentState.interface";
import { SubscriptionRequestInterface } from "@app/core/interfaces/requests/subscription-reaquest.interface";
import { ValidationErrorsInterface } from "@app/core/interfaces/validation-errors.interface";

export const paymentPageActions = createActionGroup({
    source: "payment page",
    events: {
        enter: emptyProps(),
        submitPayment: props<SubscriptionRequestInterface>(),
        pageLoadedSuccess: emptyProps(),
        pageLoadedFailure: props<{errors: ValidationErrorsInterface}>()
    }
})