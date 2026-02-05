import jwt from "jsonwebtoken";
import { JwtStandardPayload } from "../types/common.types";
import { AppError } from "./AppError";
import { ApiErrors } from "../constants/error.catalog";

export function signJwt(payload: JwtStandardPayload): string {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new AppError(
      ApiErrors.JWT_SECRET_MISSING.code,
      ApiErrors.JWT_SECRET_MISSING.message,
      500
    );
  }

  const notBeforeMillis = Date.now();
  const notAfterMillis = notBeforeMillis + 300_000;

  return jwt.sign(
    {
      ...payload,
      not_before: notBeforeMillis,
      not_after: notAfterMillis,
    },
    secret,
    {
      algorithm: "HS256",
      noTimestamp: true
    }
  );
}
