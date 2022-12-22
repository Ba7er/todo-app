import { sign, verify } from "jsonwebtoken";
import { TokenPayload } from "../types/types";


export function createToken(userData: TokenPayload): string {
    const { id, email } = userData;
    return sign({ id, email }, process.env.JWT_SECRET_KEY, { algorithm: "HS512", expiresIn: "1d" });
}

export function validateToken(token: string) {
    return verify(token, process.env.JWT_SECRET_KEY, {
        algorithms: ["HS512"]
    });
}