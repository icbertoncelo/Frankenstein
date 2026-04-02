import { CartProvider } from "@/contexts/CartProvider";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ItemsList } from "./-components/ItemsList";
import { CartTotal } from "./-components/CartTotal";
import { ProductList } from "./-components/ProductList";
import { CartHeader } from "../-components/CartHeader";
import { ClearCartButton } from "./-components/Buttons";
import { useEffect, useState } from "react";
import type { Product } from "@/dtos/cart";
import { getProducts } from "@/services/product-api/requests";

export const Route = createFileRoute(
  "/_app/state-management/approaches/context-api/",
)({
  component: RouteComponent,
});

function RouteComponent() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await getProducts();

        data && setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col mx-auto w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 gap-6">
        <Link
          to="/state-management"
          className="text-sm font-medium text-blue-500 hover:text-blue-900"
        >
          Go Back
        </Link>

        <CartProvider>
          <ProductList products={products} />
          <CartHeader>
            <ClearCartButton />
          </CartHeader>
          <ItemsList />
          <CartTotal />
        </CartProvider>
      </div>
    </section>
  );
}
