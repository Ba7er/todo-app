import { NextFunction, Request, Response } from "express";
import { UserService } from "../../services/user-service";
import { UserRegister } from "../../types/types";
import { encriptPassword, validPassword } from "../../utils/crypto";
import { createToken } from "../../utils/auth";
import { userAlreadyexists, unauthorized, userNotFound, invalidCred } from "../../utils/error";

export class UserController {

    public constructor(private userService: UserService) {
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
    }
    public async register(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        try {
            const user = <UserRegister>req.body;

            const isEmailAlready = await this.userService.getUserByEmail(
                user.email
            );
            if (isEmailAlready !== null) {
                throw userAlreadyexists();
            }

            const { hash, salt } = await encriptPassword(user.password);
            user.password = hash;
            user.salt = salt;
            const success = await this.userService.save(user);

            return res.status(200).json({
                result: true,
                data: success
            });
        } catch (error) {
            next(error);
        }
    }

    public async login(
        req: Request,
        res: Response,
        next: NextFunction)
        : Promise<Response> {

        try {
            const { email, password: payloadPassword } = req.body;
            const registeredUser = await this.userService.getUserByEmail(
                email
            );

            if (!registeredUser) {
                throw userNotFound();
            }

            const { password: savedPassword, salt } = registeredUser;

            const isValidPassword = validPassword(savedPassword, salt, payloadPassword);
            if (!isValidPassword) {
                throw invalidCred();
            }

            const token = createToken(registeredUser);

            return res.status(200).json({
                result: true,
                token: `Bearer ${token}`
            });
        } catch (error) {
            next(error);
        }

    }
}
