import { JobOffer } from "@app/core/models/job-offer";

export interface JobOffersState {
    collection: JobOffer[] | null,
    selectedJob: JobOffer | null | undefined,
    loading: boolean,
    errors: {},
    pageInfo: PageInfo
}

export interface PageInfo {
    first: boolean,
    last: boolean,
    totalPages: number,
    totalElements: number,
    currentPage: number
}