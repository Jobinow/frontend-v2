export interface RegisterRequestInterface {
    fullName: string,
    email: string,
    password: string,
    phoneNumber: string,
    address: string,
    image?: File,
    role: string
}
