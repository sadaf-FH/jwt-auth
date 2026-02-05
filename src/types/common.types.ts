export interface ApiMeta {
  code: string;
  message: string;
}

export interface SuccessResponse<T> extends ApiMeta {
  success: true;
  data: T;
}

export interface ErrorResponse extends ApiMeta {
  success: false;
  errors?: unknown;
}

export interface JwtStandardPayload {
  email: string;
  first_name: string;
  last_name: string;
  email_verified: boolean;
  customer_id: string;
}