import { LoginRequestInterface } from "@app/core/interfaces/requests/login-request.interface";
import { RegisterRequestInterface } from "@app/core/interfaces/requests/register-request.interface";
import { AuthResponse } from "@app/core/interfaces/responses/auth-response.interface";
import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const authPageActions = createActionGroup({
    source: "Auth Page",
    events: {
        register: props<RegisterRequestInterface>(),
        login: props<LoginRequestInterface>(),
        verifyAccount: props<{id: string, code: string}>(),
        logout: emptyProps()
    }
});