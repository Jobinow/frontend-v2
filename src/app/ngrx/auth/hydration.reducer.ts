import { ActionReducer, INIT, UPDATE } from "@ngrx/store";
import { AuthStateInterface } from "./authState.interface";
import { PersistanceService } from "@app/shared/services/persistance.service";

export const hydrationMetaReducer = (
    reducer: ActionReducer<AuthStateInterface>
): ActionReducer<AuthStateInterface> => {
    return (state, action) => {
        if (action.type === INIT || action.type === UPDATE) {
            const storageValue = localStorage.getItem("access");
            if (storageValue) {
                try {
                    return JSON.parse(storageValue);
                } catch {
                    localStorage.removeItem("access");
                }
            }
        }
        const nextState = reducer(state, action);
        localStorage.setItem("access", JSON.stringify(nextState));
        return nextState;
    };
}