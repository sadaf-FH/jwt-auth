import express from "express";
import jwtRoutes from "./routes/jwt.route";
import { ApiResponseBuilder } from "./utils/apiResponse.util";
import { errorHandler } from "./middleware/errorHandler";
import { ApiErrors } from "./constants/error.catalog";
import { ApiSuccess } from "./constants/success.catalog";

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => {
  return ApiResponseBuilder.success(res, ApiSuccess.OK, null);
});

app.use("/api", jwtRoutes);

app.use((_req, res) => {
  return ApiResponseBuilder.error(res, ApiErrors.NOT_FOUND, 404);
});

app.use(errorHandler);

export default app;
