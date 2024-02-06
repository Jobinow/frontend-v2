import { Access } from "../enums/access";
import { JobOffer } from "./job-offer";
import { User } from "./user";

export class Recruiter extends User {
    public address: string;
    public image: string | File;
    public jobOffers: JobOffer[];

    constructor(
        fullName: string,
        email: string,
        phoneNumber: string,
        password: string,
        address: string,
        image: string | File,
        jobOffers: JobOffer[],
        role: Access,
        isVerified: boolean,
        id?: string,
    ) {
        super(fullName, email, password, phoneNumber, role, isVerified, id);
        this.address = address;
        this.image = image;
        this.jobOffers = jobOffers;
    }
}
