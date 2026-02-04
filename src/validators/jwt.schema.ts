import { z } from "zod";

export const generateJwtSchema = z.object({
  email: z.string().email(),
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  email_verified: z.boolean(),
  not_before: z.number().int().positive(),
  not_after: z.number().int().positive(),
}).refine(
  (data) => data.not_after > data.not_before,
  {
    message: "not_after must be greater than not_before",
    path: ["not_after"],
  }
);

export type GenerateJwtInput = z.infer<typeof generateJwtSchema>;
