import { Pack } from "./pack";
import { Recruiter } from "./recruiter";

export class SubscriptionModel {
    public id?: string;
    public subscriptionStatus: string;
    public cancellationReason: string;
    public recruiter: Recruiter;
    public pack: Pack;
    public createAt: Date;
    public updatedAt: Date;

    constructor(
        subscriptionStatus: string,
        cancellationReason: string,
        recruiter: Recruiter,
        pack: Pack,
        createAt: Date,
        updatedAt: Date,
        id?: string
    ) {
        this.subscriptionStatus = subscriptionStatus;
        this.cancellationReason = cancellationReason;
        this.recruiter = recruiter;
        this.pack = pack;
        this.createAt = createAt;
        this.updatedAt = updatedAt;
        this.id = id;
    }
}