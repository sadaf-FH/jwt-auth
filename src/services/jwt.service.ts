import { JwtStandardPayload } from "../types/common.types";
import { signJwt } from "../utils/jwt.util";
import { GenerateJwtInput } from "../validators/jwt.schema";

export function generateJwtService(input: GenerateJwtInput): string {
  const payload: JwtStandardPayload = {
    email: input.email,
    first_name: input.first_name,
    last_name: input.last_name,
    email_verified: input.email_verified,
    ...(input.customer_id ? { customer_id: input.customer_id } : {}),
  };

  return signJwt(payload);
}

