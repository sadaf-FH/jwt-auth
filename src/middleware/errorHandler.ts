import { Request, Response, NextFunction } from "express";
import { ApiResponseBuilder } from "../utils/apiResponse.util";
import { ApiErrors } from "../constants/error.catalog";
import { AppError } from "../utils/AppError";

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(err);

  // If it's our custom AppError → use its info
  if (err instanceof AppError) {
    return ApiResponseBuilder.error(
      res,
      { code: err.code, message: err.message },
      err.statusCode,
      err.errors
    );
  }

  // Unknown/unhandled error → fallback
  return ApiResponseBuilder.error(
    res,
    ApiErrors.INTERNAL_SERVER_ERROR,
    500
  );
}
