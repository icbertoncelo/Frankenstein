import type { Product } from "@/dtos/product";
import { getProducts } from "@/services/product-api/requests";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error } = await getProducts();

      if (error) {
        throw new Error(
          typeof error === "string" ? error : "Failed to fetch products",
        );
      }

      return data ?? [];
    },
  });
  
  return { products, isLoading, isError };
}
