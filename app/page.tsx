import Link from "next/link";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import FeaturesGrid from "@/components/FeaturesGrid";
import productsData from "@/data/products.json";

export default function HomePage() {
  const highlights = productsData.products.filter((p) => p.active).slice(0, 3);

  return (
    <>
      <Hero />

      {/* Popular Insurance Plans */}
      <section className="py-20 max-md:py-14">
        <div className="max-w-[1200px] mx-auto px-6 max-md:px-5">
          <div className="text-center mb-12">
            <h2 className="text-[2rem] max-md:text-[1.6rem] font-bold text-[#1A1F2B] mb-3 tracking-tight">
              Popular Insurance Plans
            </h2>
            <p className="text-[#8A94A6] text-[1.1rem] max-w-[580px] mx-auto">
              Top rated insurance solutions for you and your family.
            </p>
          </div>
          <ProductGrid products={highlights} />
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold rounded-[30px] bg-[#1C3C5F] text-white shadow-[0_4px_14px_rgba(28,60,95,0.2)] hover:bg-[#264d78] hover:-translate-y-0.5 transition-all"
            >
              Explore All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <FeaturesGrid />
    </>
  );
}
