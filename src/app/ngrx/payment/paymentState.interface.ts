import { BackendErrorsInterface } from "@app/core/interfaces/backend-errors.interface";
import { ValidationErrorsInterface } from "@app/core/interfaces/validation-errors.interface";
import { SubscriptionModel } from "@app/core/models/subscriptionModel";

export interface PaymentStateInterface {
    subscription: SubscriptionModel | null | undefined,
    loading: boolean,
    submitted: boolean,
    errors: ValidationErrorsInterface | null,
    errorMessage: BackendErrorsInterface | null
}