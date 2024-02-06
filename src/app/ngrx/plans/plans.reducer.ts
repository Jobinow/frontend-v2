import { createFeature, createReducer, on } from "@ngrx/store";
import { PlansState } from "./plansState.interface";
import { plansPageActions } from "./actions/plans-page.actions";
import { plansApiActions } from "./actions/plans-api.actions";

const initialState: PlansState = {
    collection: [],
    selectedPack: null,
    loading: false,
    errors: {}
}

const plansFeature = createFeature({
    name: "plans",
    reducer: createReducer(
        initialState,
        on(plansPageActions.enter, state => ({
            ...state,
            loading: true,
            selectedPack: undefined
        })),
        on(plansApiActions.plansLoadedSuccess, (state, action) => ({
            ...state,
            collection: action.plans,
            loading: false,
            selectedPack: undefined,
            errors: {}
        })),
        on(plansApiActions.plansLoadedFailure, (state, action) => ({
            ...state,
            collection: [],
            loading: false,
            errors: action.errors
        })),
        on(plansPageActions.selectPlan, (state, action) => ({
            ...state,
            loading: false,
            selectedPack: action.pack,
            errors: {}
        }))
    )
})

export const {
    name: plansFeatureKey,
    reducer: plansReducer,
    selectCollection,
    selectSelectedPack,
    selectLoading,
    selectErrors
} = plansFeature;