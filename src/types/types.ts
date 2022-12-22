
import { Request } from "express";

export const applicationJson = "application/json";
export const applicationXml = "application/xml";
export const API = "api";
export const POST = "POST";
export const GET = "GET";
export const PUT = "PUT";
export const DELETE = "DELETE";
export const PATCH = "PATCH";

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

export interface IDateFilter {
    from: string;
    to: string;
}

export interface HashAndPwd {
    hash: string;
    salt: string;
}
