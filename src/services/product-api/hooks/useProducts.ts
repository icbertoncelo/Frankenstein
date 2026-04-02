import type { Product } from "@/dtos/product";
import { getProducts } from "@/services/product-api/requests";
import { retryApiCall, retryDelay } from "@/services/query/retry";
import { useQuery } from "@tanstack/react-query";

type ProductQueryError = Error & { status?: number };

export function useProducts() {
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error, status } = await getProducts();

      if (error) {
        const queryError = error as ProductQueryError;
        queryError.status = status;

        throw queryError;
      }

      return data ?? [];
    },
    retry: retryApiCall,
    retryDelay: retryDelay,
  });

  return { products, isLoading, isError };
}
