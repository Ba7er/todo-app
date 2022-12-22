import { Secret, JwtPayload, verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { forbidden } from "../utils/error";


export const JWT_SECRET_KEY: Secret = process.env.JWT_SECRET_KEY;
export interface CustomRequest extends Request {
    token: string | JwtPayload;
}

export const auth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            throw forbidden();
        }

        const decoded = verify(token, JWT_SECRET_KEY);
        (req as CustomRequest).token = decoded;

        next();
    } catch (error) {
        next(error);
    }
};
