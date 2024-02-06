import { Pack } from "@app/core/models/pack";

export interface PlansState {
    collection: Pack[],
    selectedPack: Pack | null | undefined,
    loading: boolean,
    errors: {}
}