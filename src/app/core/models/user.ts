import { Access } from "../enums/access";

export class User {
    public id?: string;
    public fullName: string;
    public email: string;
    public password: string;
    public phoneNumber: string;
    public role: Access;
    public isVerfied: boolean;

    constructor(
        fullName: string,
        email: string,
        password: string,
        phoneNumber: string,
        role: Access,
        isVerified: boolean,
        id?: string,
    ) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.role = role;
        this.isVerfied = isVerified;
    }
}
