export class VerificationCode {
    public id?: string | null;
    public code: string;
    public expiration?: Date | null;

    constructor(
        code: string,
        expiration?: Date | null,
        id?: string | null
    ) {
        this.code = code;
        this.expiration = expiration;
        this.id = id;
    }
}
