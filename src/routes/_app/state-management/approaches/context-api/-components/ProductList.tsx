import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "./ProductCard";

export function ProductList() {
  const { products, isLoading, isError } = useProducts();

  if (isLoading) {
    return <p className="text-sm text-slate-500">Loading products...</p>;
  }

  if (isError) {
    return <p className="text-sm text-red-600">Failed to load products.</p>;
  }

  return (
    <div className="flex gap-3 overflow-x-auto">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
