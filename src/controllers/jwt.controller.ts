import { Request, Response, NextFunction } from "express";
import { generateJwtService } from "../services/jwt.service";
import { ApiResponseBuilder } from "../utils/apiResponse.util";

export async function generateJwtController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = await generateJwtService(req.body);

    return ApiResponseBuilder.success(
      res,
      { jwt: token },
      "JWT generated successfully"
    );
  } catch (error) {
    next(error); 
  }
}