import type { Product } from "@/lib/products";

/** Price with optional struck-through compareAt (sale). */
export default function Price({ product, className = "card__price" }: { product: Product; className?: string }) {
  const onSale = product.compareAt != null && product.compareAt > product.price;
  return (
    <span className={`${className} ${onSale ? "price--sale" : ""}`}>
      {onSale && (
        <s className="price__was">
          <span className="sr-only">Was </span>${product.compareAt}
        </s>
      )}
      {onSale && <span className="sr-only">, now </span>}${product.price}
    </span>
  );
}
