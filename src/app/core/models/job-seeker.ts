import { Access } from "../enums/access";
import { Application } from "./application";
import { User } from "./user";

export class JobSeeker extends User {
    public identity: string;
    public resume: string |File;
    public applications: Application[];

    constructor(
        fullName: string,
        email: string,
        phoneNumber: string,
        password: string,
        role: Access,
        isVerified: boolean,
        identity: string,
        resume: string | File,
        applications: Application[],
        id?: string
    ) {
        super(fullName, email, password, phoneNumber, role, isVerified, id);
        this.identity = identity;
        this.resume = resume;
        this.applications = applications;
    }
}
