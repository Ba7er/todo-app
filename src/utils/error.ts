import { AppError, HttpCode } from "../exception/app-error";

export const forbidden = (): AppError => {
  return new AppError({
    code: HttpCode.FROBIDDEN,
    message: "forbidden",
  });
};


export const unauthorized = (): AppError => {
  return new AppError({
    code: HttpCode.BAD_REQUEST,
    message: "Wrong Email or password",
  });
};

export const invalidCred = (): AppError => {
  return new AppError({
    code: HttpCode.BAD_REQUEST,
    message: "Wrong Email or password",
  });
};

export const userAlreadyexists = (): AppError => {
  return new AppError({
    code: HttpCode.BAD_REQUEST,
    message: "Email already reigistered",
  });
};

export const userNotFound = (): AppError => {
  return new AppError({
    code: HttpCode.BAD_REQUEST,
    message: "User Not Found",
  });
};




