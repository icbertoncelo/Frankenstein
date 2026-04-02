import axios from "axios";

import { defaultInterceptors } from "../http/interceptors";

const productsApiConfig = axios.create({
  baseURL: import.meta.env.VITE_PRODUCTS_API_URL,
});

productsApiConfig.interceptors.response.use(...defaultInterceptors);

export { productsApiConfig };
