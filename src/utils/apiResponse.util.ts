import { Response } from "express";
import { ErrorResponse, SuccessResponse, ApiMeta } from "../types/common.types";

export class ApiResponseBuilder {
  static success<T>(
    res: Response,
    meta: ApiMeta,
    data: T,
    statusCode = 200
  ) {
    const response: SuccessResponse<T> = {
      success: true,
      code: meta.code,
      message: meta.message,
      data,
    };

    return res.status(statusCode).json(response);
  }

  static error(
    res: Response,
    meta: ApiMeta,
    statusCode = 500,
    errors?: unknown
  ) {
    const response: ErrorResponse = {
      success: false,
      code: meta.code,
      message: meta.message,
      errors,
    };

    return res.status(statusCode).json(response);
  }
}
