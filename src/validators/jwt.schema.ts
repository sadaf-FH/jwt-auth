import { z } from "zod";

export const generateJwtSchema = z.object({
  email: z.string().email(),
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  email_verified: z.boolean(),
  customer_id: z.string().min(1)
});

export type GenerateJwtInput = z.infer<typeof generateJwtSchema>;
