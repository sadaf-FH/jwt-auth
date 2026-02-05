import { signJwt } from "../utils/jwt.util";
import { GenerateJwtInput } from "../validators/jwt.schema";

export function generateJwtService(input: GenerateJwtInput): string {
  return signJwt(
    {
      email: input.email,
      first_name: input.first_name,
      last_name: input.last_name,
      email_verified: input.email_verified,
      customer_id: input.customer_id
    }
  );
}
