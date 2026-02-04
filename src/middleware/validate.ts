import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";
import { ApiResponseBuilder } from "../utils/apiResponse.util";

export const validate =
  (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return ApiResponseBuilder.error(
        res,
        "Validation failed",
        400,
        result.error.flatten()
      );
    }

    req.body = result.data;
    next();
  };
