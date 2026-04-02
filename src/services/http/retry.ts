import { waitMs } from "@/utils/wait";
import { RETRY_AFTER_HEADER } from "./constants";
import { type DefaultResponse, type RetryOptions } from "./interfaces";
import {
  isTooManyRequestsError,
  isUnauthorizedAccessError,
  shouldRetryTheApiCall,
} from "./utils";

/**
 * It retries the API call in case of a system error (status code `500`, `502`, `503`, `504`) or `429` (Too Many Requests),
 * using an exponential backoff strategy. It can also handles the case of unauthorized access (status code `401` or `403`), redirecting the user accordingly.
 */
export async function retryApiCall<D, E>(
  apiCall: () => Promise<DefaultResponse<D, E>>,
  options?: RetryOptions,
): Promise<DefaultResponse<D, E>> {
  let {
    baseDelayInMs,
    maxRetryAttempts,
    retries,
    shouldHandleUnauthorized,
  }: RetryOptions = {
    baseDelayInMs: 500,
    maxRetryAttempts: 3,
    retries: 0,
    shouldHandleUnauthorized: true,
    ...options,
  };

  const exponentialBackoffDelay = baseDelayInMs * Math.pow(2, retries);

  const resp = await apiCall();

  if (shouldRetryTheApiCall(resp.status) && maxRetryAttempts > 0) {
    let retryAfter: number | undefined;
    if (isTooManyRequestsError(resp.status)) {
      const retryAfterHeader = resp.headers?.[RETRY_AFTER_HEADER];
      try {
        retryAfter =
          typeof retryAfterHeader === "number"
            ? retryAfterHeader * 1000
            : typeof retryAfterHeader === "string"
              ? new Date(retryAfterHeader).getTime() - Date.now()
              : undefined;
      } catch (e) {
        retryAfter = undefined;
      }
    }

    await waitMs(retryAfter || exponentialBackoffDelay);
    await retryApiCall(apiCall, {
      maxRetryAttempts: --maxRetryAttempts,
      baseDelayInMs,
      retries: ++retries,
    });
  }

  if (shouldHandleUnauthorized && isUnauthorizedAccessError(resp.status)) {
    console.log("Unauthorized access detected. Redirecting to login page...");
  }

  return resp;
}
