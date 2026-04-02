import { shouldRetryTheApiCall } from "../http/utils";

type ProductQueryError = Error & { status?: number };

export function retryApiCall(failureCount: number, error: Error) {
  const queryError = error as ProductQueryError;
  const shouldRetry = shouldRetryTheApiCall(queryError.status);

  return shouldRetry && failureCount < 3;
}

export function retryDelay(attemptIndex: number) {
  return Math.min(1000 * 2 ** attemptIndex, 8000);
}
