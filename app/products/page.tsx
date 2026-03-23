import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import productsData from "@/data/products.json";

export const metadata = {
  title: "Products — FindiInsure",
  description: "Browse all insurance products available on FindiInsure.",
};

export default function ProductsPage() {
  const products = productsData.products.filter((p) => p.active);

  return (
    <>
      <PageHero title="Our Products" subtitle="Browse our comprehensive range of insurance plans" />
      <section className="py-20 max-md:py-14">
        <div className="max-w-[1200px] mx-auto px-6 max-md:px-5">
          <ProductGrid products={products} />
        </div>
      </section>
    </>
  );
}
