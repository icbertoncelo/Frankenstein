import { type AxiosResponse, isAxiosError } from "axios";

import { RETRY_AFTER_HEADER } from "./constants";

export const defaultInterceptors = [
  function onFulfilled(response: AxiosResponse) {
    response.data = {
      data: response.data,
      error: null,
      status: response.status,
    };

    return response;
  },
  function onRejected(error: AxiosResponse) {
    if (isAxiosError(error) && error.response) {
      error.response.data = {
        data: null,
        error: error.response?.data || error.response.statusText,
        status: error.response.status,
        headers: {
          [RETRY_AFTER_HEADER]: error.response.headers?.[RETRY_AFTER_HEADER],
        },
      };
    }

    return Promise.reject(error);
  },
];
