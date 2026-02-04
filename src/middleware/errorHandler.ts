import { Request, Response, NextFunction } from "express";
import { ApiResponseBuilder } from "../utils/apiResponse.util";

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(err);

  return ApiResponseBuilder.error(
    res,
    err.message || "Internal server error",
    500
  );
}
