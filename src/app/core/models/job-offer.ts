import { OfferStatus } from "../enums/offer-status";
import { Application } from "./application";
import { Recruiter } from "./recruiter";

export class JobOffer {
    public id?: string;
    public title: string;
    public description: string;
    public profile: string;
    public address: string;
    public educationalLevel: string;
    public salary: number;
    public status: OfferStatus;
    public recruiter: Recruiter;
    public applications: Application[];

    constructor(
        title: string,
        description: string,
        profile: string,
        address: string,
        educationalLevel: string,
        salary: number,
        status: OfferStatus,
        recruiter: Recruiter,
        applications: Application[],
        id?: string
    ) {
        this.title = title;
        this.description = description;
        this.profile = profile;
        this.address = address;
        this.educationalLevel = educationalLevel;
        this.salary = salary;
        this.status = status;
        this.recruiter = recruiter;
        this.applications = applications;
        this.id = id;
    }
}
