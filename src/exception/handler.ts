/**
 * Define the error & exception handlers
 *
 * @author Abdelellah Dandashi <Abdelellah.Dandashi@gmail.com>
 */
import { AppError } from "./app-error";
import { Request, Response, NextFunction } from "express";



class ExceptionHandler {
  public static errorHandler(
    error: AppError,
    req: Request,
    res: Response,
    next: NextFunction
  ): Response {

    if (Object.keys(error).length > 0) {
      return res.status(error.code ? error.code : 403).json({
        result: false,
        error
      });
    }

    return res.status(500).json({
      result: false,
      error,
    });
  }
}

export default ExceptionHandler;
