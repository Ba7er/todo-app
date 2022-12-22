import * as crypto from 'crypto';

import { HashAndPwd } from "../types/types";


export function encriptPassword(
    password: string,
): HashAndPwd {
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto
        .pbkdf2Sync(password, salt, 1000, 64, `sha512`)
        .toString(`hex`);
    return { hash, salt };

}

export function validPassword(password: string, salt: string, payloadPassword: string): boolean {
    const hash = crypto
        .pbkdf2Sync(payloadPassword, salt, 1000, 64, `sha512`)
        .toString(`hex`);
    return hash === password;
}
