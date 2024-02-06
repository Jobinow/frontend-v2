import { ChargesRequestInterface } from "./charges-request.interface"

export interface SubscriptionRequestInterface {
    subscriptionStatus: string,
    cancellationReason?: string,
    recruiter: string,
    pack: string
    chargeRequest?: ChargesRequestInterface
}