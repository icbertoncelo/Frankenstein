import type { CartItem } from "@/store/cart/types";
import { ProductCard } from "./ProductCard";

const SAMPLE_PRODUCTS: Omit<CartItem, "quantity" | "isFavorite">[] = [
  { id: "1", name: "Mechanical Keyboard", price: 129.99 },
  { id: "2", name: "Wireless Mouse", price: 49.99 },
  { id: "3", name: "Monitor Stand", price: 34.99 },
  { id: "4", name: "USB-C Hub", price: 59.99 },
  { id: "5", name: "Desk Mat", price: 24.99 },
];

export function ProductList() {
  return (
    <div className="flex gap-3 overflow-x-auto">
      {SAMPLE_PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
