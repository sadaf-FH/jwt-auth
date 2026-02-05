export const ApiErrors = {
  INTERNAL_SERVER_ERROR: {
    code: "GEN_001",
    message: "Something went wrong",
  },

  BAD_REQUEST: {
    code: "GEN_002",
    message: "Invalid request data",
  },

  UNAUTHORIZED: {
    code: "AUTH_001",
    message: "Unauthorized",
  },

  FORBIDDEN: {
    code: "AUTH_002",
    message: "Forbidden",
  },

  NOT_FOUND: {
    code: "GEN_003",
    message: "Resource not found",
  },

  JWT_SECRET_MISSING: {
    code: "JWT_001",
    message: "JWT secret is not configured",
  },

  TOKEN_GENERATION_FAILED: {
    code: "JWT_002",
    message: "Failed to generate token",
  },

  INVALID_TOKEN: {
    code: "JWT_003",
    message: "Invalid or expired token",
  },
} as const;
