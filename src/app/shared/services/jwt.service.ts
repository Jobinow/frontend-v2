import { Injectable } from "@angular/core";
import { jwtDecode } from "jwt-decode";

@Injectable({
    providedIn: "root"
})
export class JwtService {
    constructor(){}

    decode(token: string): unknown {
        try {
            return jwtDecode(token)
        }catch(e) {
            console.error("Error decoding jwt token", e);
            return null;
        }
    }
}