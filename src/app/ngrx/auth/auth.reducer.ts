import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "./authState.interface";
import { authPageActions } from "./actions/auth-page.actions";
import { authApiActions } from "./actions/auth-api.actions";

const initialState: AuthStateInterface = {
    user: undefined,
    isLoggedIn: false,
    isSubmitting: false,
    isLoading: false,
    validationErrors: null,
    errorMessage: null
}

const authFeature = createFeature({
    name: "auth",
    reducer: createReducer(
        initialState,
        on(authPageActions.register, state => ({ 
            ...state, 
            isSubmitting: true,
            isLoading: true,
            validationErrors: null
        })),
        on(authApiActions.registerSuccess, (state, action) => ({
            ...state,
            isSubmitting: false,
            isLoading: false,
            isLoggedIn: true,
            user: { email: action.email, token: action.token, username: action.username, role: action.role, verified: action.verified },
        })),
        on(authApiActions.registerFailure, (state, action) => ({
            ...state,
            isSubmitting: false,
            isLoading: false,
            user: undefined,
            isLoggedIn: false,
            validationErrors: action.errors,
            errorMessage: action.errorMessage
        })),
        on(authPageActions.login, state => ({
            ...state,
            isSubmitting: true,
            isLoading: true,
            isLoggedIn: false,
            validationErrors: null
        })),
        on(authApiActions.loginSuccess, (state, action) => ({
            ...state,
            isSubmitting: false,
            isLoading: false,
            isLoggedIn: true,
            user: { email: action.email, token: action.token, username: action.username, role: action.role, verified: action.verified }
        })),
        on(authApiActions.loginFailure, (state, action) => ({
            ...state,
            isSubmitting: false,
            isLoading: false,
            isLoggedIn: false,
            user: undefined,
            validationErrors: action.errors,
            errorMessage: action.errorMessage
        })),
        on(authPageActions.logout, state => ({
            ...state,
            isSubmitting: false,
            isLoading: false,
            isLoggedIn: false,
            user: null,
            validationErrors: null
        })),
        on(authPageActions.verifyAccount, (state) => ({
            ...state,
            isLoading: true,
            isSubmitting: true
        })),
        on(authApiActions.verifyAccountSuccess, (state, action) => ({
            ...state,
            isLoading: false,
            isLoggedIn: true,
            user: { email: action.email, token: action.token, username: action.username, role: action.role, verified: action.verified }
        })),
        on(authApiActions.verifyAccountFailure, (state, action) => ({
            ...state,
            isLoading: false,
            errorMessage: action.errorMessage,
            validationErrors: action.errors,
            user: null
        }))
    )
})

export const {
    name: authFeatureKey,
    reducer: authReducer,
    selectIsSubmitting,
    selectIsLoggedIn,
    selectIsLoading,
    selectUser,
    selectValidationErrors,
} = authFeature;