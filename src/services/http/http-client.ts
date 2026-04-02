import {
  AxiosError,
  isAxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
} from "axios";

import {
  type DefaultResponse,
  type ProblemDetailsJson,
  type RetryOptions,
} from "./interfaces";
import { retryApiCall } from "./retry";
import { DEFAULT_ERROR_MSG, defaultErrorResponse } from "./utils";

type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

export class HttpClient<
  ServiceErrorInterface extends ProblemDetailsJson | null | string,
> {
  constructor(private readonly httpInstance: AxiosInstance) {}

  private request<ResponseData>(
    method: HttpMethod,
    url: string,
    payload?: unknown,
    config?: AxiosRequestConfig,
    retryOptions?: RetryOptions,
  ) {
    return retryApiCall(async () => {
      try {
        return (
          await this.httpInstance.request<DefaultResponse<ResponseData, null>>({
            ...config,
            method,
            url,
            data: payload,
          })
        ).data;
      } catch (err) {
        if (isAxiosError(err)) {
          return defaultErrorResponse(
            err as AxiosError<DefaultResponse<null, ServiceErrorInterface>>,
          );
        }

        return { data: null, error: DEFAULT_ERROR_MSG };
      }
    }, retryOptions);
  }

  get<ResponseData>(
    url: string,
    config?: AxiosRequestConfig,
    retryOptions?: RetryOptions,
  ) {
    return this.request<ResponseData>("get", url, undefined, config, retryOptions);
  }

  put<ResponseData>(
    url: string,
    payload?: unknown,
    config?: AxiosRequestConfig,
    retryOptions?: RetryOptions,
  ) {
    return this.request<ResponseData>("put", url, payload, config, retryOptions);
  }

  post<ResponseData>(
    url: string,
    payload?: unknown,
    config?: AxiosRequestConfig,
    retryOptions?: RetryOptions,
  ) {
    return this.request<ResponseData>("post", url, payload, config, retryOptions);
  }

  patch<ResponseData>(
    url: string,
    payload?: unknown,
    config?: AxiosRequestConfig,
    retryOptions?: RetryOptions,
  ) {
    return this.request<ResponseData>("patch", url, payload, config, retryOptions);
  }

  delete<ResponseData>(
    url: string,
    config?: AxiosRequestConfig,
    retryOptions?: RetryOptions,
  ) {
    return this.request<ResponseData>("delete", url, undefined, config, retryOptions);
  }
}
