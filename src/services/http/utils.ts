import { AxiosError } from 'axios';

import { SHOULD_RETRY, STATUS_CODES } from './constants';
import { type DefaultResponse } from './interfaces';

export const DEFAULT_ERROR_MSG = 'Something went wrong. Please try again';
export const TURNSTILE_ERROR_MSG = 'Please verify you are human by checking the box';
export const DEFAULT_DOB_VALIDATION_MESSAGE = 'Please enter a valid date of birth.';
export const DEFAULT_ERROR_MSG_MOBILE_NUMBER_EXISTS = `We've seen this mobile number before. Please try a different one.`;

/**
 * @description this functions returns either the intercepted response object
 * (see `@/services/interceptors.ts`) or a fallback object with a plain string error message.
 */
export function defaultErrorResponse<E>(
  err: AxiosError<DefaultResponse<null, E>>
): DefaultResponse<null, E | string> {
  if (err.response?.data?.error) return err.response.data;
  return { error: DEFAULT_ERROR_MSG, data: null };
}

export function isSystemError(status?: number | unknown) {
  return status === STATUS_CODES.INTERNAL_SERVER_ERROR;
}

export function isSessionTimeout(status?: number) {
  return status === STATUS_CODES.UNAUTHORIZED;
}

export function isSuccessfulResponse(status?: number) {
  return typeof status === 'number' && status >= 200 && status < 300;
}

export function shouldRetryTheApiCall(status?: unknown) {
  return !!Number(status) && SHOULD_RETRY.includes(Number(status));
}

export function isTooManyRequestsError(status?: unknown) {
  return !!Number(status) && Number(status) === STATUS_CODES.TOO_MANY_REQUESTS;
}

export function isUnauthorizedAccessError(status?: unknown) {
  return (
    !!Number(status) &&
    (Number(status) === STATUS_CODES.UNAUTHORIZED || Number(status) === STATUS_CODES.FORBIDDEN)
  );
}
