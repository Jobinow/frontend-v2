import { BackendErrorsInterface } from "@app/core/interfaces/backend-errors.interface";
import { ValidationErrorsInterface } from "@app/core/interfaces/validation-errors.interface";
import { SubscriptionModel } from "@app/core/models/subscriptionModel";
import { createActionGroup, props } from "@ngrx/store";

export const paymentApiActions = createActionGroup({
    source: "payment api",
    events: {
        paymentSucess: props<{ subscription: SubscriptionModel }>(),
        paymentFailure: props<{errors: ValidationErrorsInterface, errorMessage: BackendErrorsInterface}>()
    }
});