"use client";

import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  slug: string;
  premium: number;
  image: string;
  shortDescription: string;
}

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
