"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { useCart } from "@/context/CartContext";
import productsData from "@/data/products.json";

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = productsData.products.find((p) => p.slug === slug);
  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#1C3C5F] to-[#142d47] pt-[calc(72px+48px)] max-md:pt-[calc(64px+48px)] pb-12 text-center relative overflow-hidden">
        <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(212,63,51,0.1)_0%,transparent_70%)] -top-[100px] -right-[50px] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 max-md:px-5 relative z-[1]">
          <h1 className="text-white text-[2.25rem] max-md:text-[1.75rem] font-bold mb-3">
            {product.name}
          </h1>
          <p className="text-white/70 text-[1.05rem] max-w-[520px] mx-auto">
            {product.category} Insurance
          </p>
        </div>
      </section>

      <section className="py-20 max-md:py-14">
        <div className="max-w-[880px] mx-auto px-6 max-md:px-5">
          <div className="bg-white border border-[#E2E8F0] rounded-[18px] overflow-hidden shadow-md">
            {/* Header: Image + Info */}
            <div className="grid grid-cols-2 max-lg:grid-cols-1">
              {/* Image */}
              <div className="bg-[#F1F3F6] flex items-center justify-center min-h-[320px] max-lg:min-h-[240px] max-md:min-h-[200px] p-8 max-md:p-6">
                <Image
                  src={product.image}
                  alt={`${product.name} insurance`}
                  width={400}
                  height={280}
                  className="max-w-full max-h-[280px] object-contain rounded-[10px]"
                />
              </div>

              {/* Info */}
              <div className="p-10 max-lg:p-8 max-md:p-6 flex flex-col justify-center">
                <h2 className="text-[1.75rem] max-md:text-[1.4rem] font-extrabold text-[#1A1F2B] mb-2">
                  {product.name}
                </h2>

                {/* Meta badges */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-full text-[0.85rem] font-medium text-[#4A5568]">
                    🏷️ {product.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-full text-[0.85rem] font-medium text-[#4A5568]">
                    🏢 {product.insurer}
                  </span>
                </div>

                {/* Premium box */}
                <div className="bg-gradient-to-br from-[rgba(28,60,95,0.04)] to-[rgba(28,60,95,0.02)] border border-[#E2E8F0] rounded-[14px] p-5 px-6 mb-6">
                  <div className="text-[0.8rem] text-[#8A94A6] uppercase tracking-[0.05em] font-medium mb-1">
                    Starting Premium
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[2rem] font-extrabold text-[#1C3C5F]">
                      ₹{product.premium}
                    </span>
                    <span className="text-[0.9rem] text-[#8A94A6]">/ {product.tenure}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 max-md:flex-col">
                  <button
                    onClick={() =>
                      addToCart(
                        { id: product.id, name: product.name, premium: product.premium, slug: product.slug },
                        true
                      )
                    }
                    className="inline-flex items-center justify-center py-3.5 px-7 font-semibold rounded-[30px] bg-[#D43F33] text-white shadow-[0_4px_14px_rgba(212,63,51,0.3)] hover:bg-[#b8352b] hover:-translate-y-0.5 transition-all max-md:w-full"
                  >
                    Buy Now
                  </button>
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center py-3.5 px-7 font-semibold rounded-[30px] border-2 border-[#1C3C5F] text-[#1C3C5F] hover:bg-[#1C3C5F] hover:text-white hover:-translate-y-0.5 transition-all max-md:w-full"
                  >
                    All Products
                  </Link>
                </div>
              </div>
            </div>

            {/* Description body */}
            <div className="p-10 max-lg:p-8 max-md:p-6 border-t border-[#E2E8F0]">
              <h3 className="text-[1.2rem] text-[#1C3C5F] font-bold mb-4">About This Plan</h3>
              <div className="text-[#4A5568] leading-[1.9] whitespace-pre-line text-[0.95rem]">
                {product.description}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
