import jwt from "jsonwebtoken";
import { JwtStandardPayload } from "../types/common.types";

export function signJwt(
  payload: JwtStandardPayload,
  notBeforeMs: number,
  notAfterMs: number
): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined");
  }
  const notBeforeSec = Math.floor(notBeforeMs / 1000);
  const expiresInSec = Math.floor((notAfterMs - notBeforeMs) / 1000);

  return jwt.sign(payload, secret, {
    algorithm: "HS256",
    notBefore: notBeforeSec,
    expiresIn: expiresInSec,
  });
}
