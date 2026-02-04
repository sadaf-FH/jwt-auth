import { Router } from "express";
import { generateJwtController } from "../controllers/jwt.controller";
import { validate } from "../middleware/validate";
import { generateJwtSchema } from "../validators/jwt.schema";

const router = Router();

router.post(
  "/generate-jwt",
  validate(generateJwtSchema),
  generateJwtController
);

export default router;
