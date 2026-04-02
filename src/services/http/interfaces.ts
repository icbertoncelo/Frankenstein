import { RETRY_AFTER_HEADER } from "./constants";

export interface DefaultResponse<D, E> {
  data: D;
  error: E;
  status?: number;
  headers?: Record<typeof RETRY_AFTER_HEADER, number | string>;
}

export interface ProblemDetailsJson {
  detail?: string;
  type?: string;
  status?: number;
  title?: string;
  instance?: string;
}
