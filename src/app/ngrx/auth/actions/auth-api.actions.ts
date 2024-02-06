import { ValidationErrorsInterface } from "@app/core/interfaces/validation-errors.interface";
import { AuthResponse } from "@app/core/interfaces/responses/auth-response.interface";
import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { BackendErrorsInterface } from "@app/core/interfaces/backend-errors.interface";

export const authApiActions = createActionGroup({
    source: "Auth Api",
    events: {
        registerSuccess: props<AuthResponse>(),
        registerFailure: props<{ errors: ValidationErrorsInterface, errorMessage: BackendErrorsInterface }>(),
        loginSuccess: props<AuthResponse>(),
        loginFailure: props<{ errors: ValidationErrorsInterface, errorMessage: BackendErrorsInterface }>(),
        logoutSuccess: props<{ message: string }>(),
        logoutFailure: props<{ message: string }>(),
        verifyAccountSuccess: props<AuthResponse>(),
        verifyAccountFailure: props<{ errors: ValidationErrorsInterface, errorMessage: BackendErrorsInterface }>()
    }
})