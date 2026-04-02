import { AxiosError } from "axios";

import { SHOULD_RETRY, STATUS_CODES } from "./constants";
import { type DefaultResponse } from "./interfaces";

export const DEFAULT_ERROR_MSG = "Something went wrong. Please try again";

export function defaultErrorResponse<E>(
  err: AxiosError<DefaultResponse<null, E>>,
): DefaultResponse<null, E | string> {
  if (err.response?.data?.error) return err.response.data;
  return { error: DEFAULT_ERROR_MSG, data: null };
}

export function isSystemError(status?: number) {
  return status === STATUS_CODES.INTERNAL_SERVER_ERROR;
}

export function isSessionTimeout(status?: number) {
  return status === STATUS_CODES.UNAUTHORIZED;
}

export function isSuccessfulResponse(status?: number) {
  return (
    typeof status === "number" &&
    status >= STATUS_CODES.OK &&
    status < STATUS_CODES.MULTIPLE_CHOICES
  );
}

export function shouldRetryTheApiCall(status?: number) {
  return SHOULD_RETRY.includes(Number(status));
}

export function isTooManyRequestsError(status?: number) {
  return status === STATUS_CODES.TOO_MANY_REQUESTS;
}

export function isUnauthorizedAccessError(status?: number) {
  return (
    status === STATUS_CODES.UNAUTHORIZED || status === STATUS_CODES.FORBIDDEN
  );
}
