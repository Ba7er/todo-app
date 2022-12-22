
export interface UserRegister {
    id?: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    salt: string;
    role: string;

}

export interface TokenPayload {
    id?: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    salt: string;
}


export interface HashAndPwd {
    hash: string;
    salt: string;
}
