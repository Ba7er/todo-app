import { Constants } from "../constants";

export enum HttpCode {
    OK = Constants.HTTP_CODE.OK,
    NO_CONTENT = Constants.HTTP_CODE.NO_CONTENT,
    BAD_REQUEST = Constants.HTTP_CODE.BAD_REQUEST,
    UNAUTHORIZED = Constants.HTTP_CODE.UNAUTHORIZED,
    NOT_FOUND = Constants.HTTP_CODE.NOT_FOUND,
    INTERNAL_SERVER_ERROR = Constants.HTTP_CODE.INTERNAL_SERVER_ERROR,
    FROBIDDEN = Constants.HTTP_CODE.FROBIDDEN
}

interface AppErrorArgs {
    code: HttpCode;
    message: string;
    errors?: object[];
}

export class AppError extends Error {
    public readonly code: HttpCode;
    public readonly message: string;
    public readonly errors: object[];

    constructor(args: AppErrorArgs) {
        super();
        this.code = args.code;
        this.message = args.message;
        this.errors = args.errors;

        Object.setPrototypeOf(this, new.target.prototype);

        Error.captureStackTrace(this);
    }
}
