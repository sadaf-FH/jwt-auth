export class AppError extends Error {
  code: string;
  statusCode: number;
  errors?: unknown;

  constructor(code: string, message: string, statusCode = 500, errors?: unknown) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    this.errors = errors;
  }
}
