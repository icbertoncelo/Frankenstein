import {
  AxiosError,
  isAxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
} from "axios";

import { type DefaultResponse, type ProblemDetailsJson } from "./interfaces";
import { DEFAULT_ERROR_MSG, defaultErrorResponse } from "./utils";

type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

export class HttpClient<
  ServiceErrorInterface extends ProblemDetailsJson | null | string,
> {
  constructor(private readonly httpInstance: AxiosInstance) {}

  private async request<ResponseData>(
    method: HttpMethod,
    url: string,
    payload?: unknown,
    config?: AxiosRequestConfig,
  ) {
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
  }

  get<ResponseData>(url: string, config?: AxiosRequestConfig) {
    return this.request<ResponseData>("get", url, undefined, config);
  }

  put<ResponseData>(
    url: string,
    payload?: unknown,
    config?: AxiosRequestConfig,
  ) {
    return this.request<ResponseData>("put", url, payload, config);
  }

  post<ResponseData>(
    url: string,
    payload?: unknown,
    config?: AxiosRequestConfig,
  ) {
    return this.request<ResponseData>("post", url, payload, config);
  }

  patch<ResponseData>(
    url: string,
    payload?: unknown,
    config?: AxiosRequestConfig,
  ) {
    return this.request<ResponseData>("patch", url, payload, config);
  }

  delete<ResponseData>(url: string, config?: AxiosRequestConfig) {
    return this.request<ResponseData>("delete", url, undefined, config);
  }
}
