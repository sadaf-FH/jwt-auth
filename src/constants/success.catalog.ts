export const ApiSuccess = {
  OK: {
    code: "GEN_200",
    message: "Success",
  },

  CREATED: {
    code: "GEN_201",
    message: "Resource created successfully",
  },

  TOKEN_GENERATED: {
    code: "JWT_200",
    message: "Token generated successfully",
  },

  TOKEN_VERIFIED: {
    code: "JWT_201",
    message: "Token verified successfully",
  },
} as const;
