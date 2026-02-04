import express from "express";
import jwtRoutes from "./routes/jwt.route";
import { ApiResponseBuilder } from "./utils/apiResponse.util";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());

app.get("/health", (_req, res) => {
  return ApiResponseBuilder.success(res, null, "OK");
});

app.use("/api", jwtRoutes);

app.use((_req, res) => {
  return ApiResponseBuilder.error(res, "Route not found", 404);
});

app.use(errorHandler);

export default app;
