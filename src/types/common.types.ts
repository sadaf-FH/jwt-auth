export interface JwtStandardPayload {
  email: string;
  first_name: string;
  last_name: string;
  email_verified: boolean;
}

export interface SuccessResponse<T> {
  success: true;
  message: string;
  data: T;
}

export interface ErrorResponse {
  success: false;
  message: string;
  errors?: unknown;
}
