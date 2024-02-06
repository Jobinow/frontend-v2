import { createFeature, createReducer, on } from "@ngrx/store";
import { PaymentStateInterface } from "./paymentState.interface";
import { paymentPageActions } from "./actions/payment-page.actions";
import { paymentApiActions } from "./actions/payment-api.actions";

const initialeState: PaymentStateInterface = {
    loading: false,
    submitted: false,
    errors: null,
    subscription: undefined,
    errorMessage: null
}

const paymentFeature = createFeature({
    name: "payment",
    reducer: createReducer(
        initialeState,
        on(paymentPageActions.enter, state => ({
            ...state,
            loading: true,
            submitted: false
        })),
        on(paymentPageActions.submitPayment, state => ({
            ...state,
            loading: false,
            submitted: true
        })),
        on(paymentPageActions.pageLoadedSuccess, (state, action) => ({
            ...state,
            loading: false,
            submitted: false
        })),
        on(paymentPageActions.pageLoadedFailure, (state, action) => ({
            ...state,
            loading: false,
            submitted: false,
            errors: action.errors,
        })),
        on(paymentApiActions.paymentSucess, (state, action) => ({
            ...state,
            subscription: action.subscription,
            submitted: false,
            loading: false
        })),
        on(paymentApiActions.paymentFailure, (state, action) => ({
            ...state,
            subscription: undefined,
            submitted: false,
            loading: false,
            errors: action.errors,
            errorMessage: action.errorMessage
        }))
    )
})

export const {
    name: paymentFeatureKey,
    reducer: paymentReducer,
    selectLoading,
    selectErrors,
    selectSubscription,
    selectSubmitted,
    selectErrorMessage
} = paymentFeature;