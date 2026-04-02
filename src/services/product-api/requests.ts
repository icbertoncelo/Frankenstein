import type { Product } from "@/dtos/product";

import { HttpClient } from "../http/http-client";
import { productsApiConfig } from "./config";
import type { DefaultErrorMessageProductApi } from "./interfaces";

const productsClient = new HttpClient<DefaultErrorMessageProductApi>(productsApiConfig);

export function getProducts() {
  return productsClient.get<Product[]>("/products");
}
