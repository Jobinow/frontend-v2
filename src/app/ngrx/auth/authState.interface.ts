import { ValidationErrorsInterface } from "@app/core/interfaces/validation-errors.interface"
import { AuthResponse } from "@app/core/interfaces/responses/auth-response.interface"
import { BackendErrorsInterface } from "@app/core/interfaces/backend-errors.interface"

export interface AuthStateInterface {
    user: AuthResponse | null | undefined,
    isLoggedIn: boolean,
    isSubmitting: boolean,
    isLoading: boolean,
    validationErrors: ValidationErrorsInterface | null,
    errorMessage: BackendErrorsInterface | null
}