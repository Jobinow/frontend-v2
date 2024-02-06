import { JobOffer } from "./job-offer";
import { JobSeeker } from "./job-seeker";

export class Application {
    public id?: string;
    public motivationLetter: string;
    public jobSeeker: JobSeeker;
    public jobOffer: JobOffer;

    constructor(
        motivationLetter: string,
        jobSeeker: JobSeeker,
        jobOffer: JobOffer,
        id?: string
    ) {
        this.motivationLetter = motivationLetter;
        this.jobSeeker = jobSeeker;
        this.jobOffer = jobOffer;
        this.id = id;
    }
}
