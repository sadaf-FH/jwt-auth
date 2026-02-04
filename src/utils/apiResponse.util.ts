import { Response } from "express";
import { ErrorResponse, SuccessResponse } from "../types/common.types";

export class ApiResponseBuilder {
  static success<T>(
    res: Response,
    data: T,
    message = "Success",
    statusCode = 200
  ) {
    const response: SuccessResponse<T> = {
      success: true,
      message,
      data,
    };

    return res.status(statusCode).json(response);
  }

  static error(
    res: Response,
    message = "Something went wrong",
    statusCode = 500,
    errors?: unknown
  ) {
    const response: ErrorResponse = {
      success: false,
      message,
      errors,
    };

    return res.status(statusCode).json(response);
  }
}
