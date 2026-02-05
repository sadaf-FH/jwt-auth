import { Request, Response, NextFunction } from "express";
import { generateJwtService } from "../services/jwt.service";
import { ApiResponseBuilder } from "../utils/apiResponse.util";
import { ApiSuccess } from "../constants/success.catalog";

export async function generateJwtController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = await generateJwtService(req.body);

    return ApiResponseBuilder.success(
      res,
      ApiSuccess.TOKEN_GENERATED,
      { jwt: token }
    );
  } catch (error) {
    next(error);
  }
}
