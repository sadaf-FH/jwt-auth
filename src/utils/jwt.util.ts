import jwt from "jsonwebtoken";
import { JwtStandardPayload } from "../types/common.types";

export function signJwt(
  payload: JwtStandardPayload,
): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined");
  }
  const notBeforeMillis = Date.now();
  const notAfterMillis = notBeforeMillis + 5 * 60 * 1000; 


  return jwt.sign(payload, secret, {
    algorithm: "HS256",
    notBefore: notBeforeMillis,
    expiresIn: notAfterMillis,
  });
}
