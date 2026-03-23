"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface Product {
  id: string;
  name: string;
  slug: string;
  premium: number;
  image: string;
  shortDescription: string;
}

const COMING_SOON_SLUGS = ["mobile-insurance", "cyber-protection"];

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[14px] overflow-hidden relative flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_25px_-5px_rgba(28,60,95,0.1),0_10px_10px_-5px_rgba(28,60,95,0.03)] hover:border-transparent group">
      {/* Top gradient line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1C3C5F] to-[#D43F33] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-[5]" />

      {/* Image */}
      <div className="w-full h-[200px] bg-[#F1F3F6] flex items-center justify-center overflow-hidden relative p-5">
        <Image
          src={product.image}
          alt={`${product.name} insurance`}
          width={280}
          height={160}
          className="max-w-[90%] max-h-[90%] object-contain transition-transform duration-300 group-hover:scale-[1.04]"
        />
        <div className="absolute top-4 right-4 bg-[#1C3C5F] text-white px-3.5 py-1.5 rounded-[30px] text-[0.8rem] font-bold shadow-sm z-10">
          Starting ₹{product.premium}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-[1.15rem] font-bold text-[#1A1F2B] mb-2 min-h-[48px] line-clamp-2">
          {product.name}
        </h3>
        <p className="text-[0.92rem] text-[#8A94A6] leading-relaxed mb-5 min-h-[48px] line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Actions */}
        <div className="flex gap-2.5 mt-auto max-md:flex-col">
          {COMING_SOON_SLUGS.includes(product.slug) ? (
            <span className="flex-1 inline-flex items-center justify-center py-3 px-1.5 text-[0.85rem] font-semibold rounded-[30px] bg-[#E0E4EA] text-[#8A94A6] cursor-not-allowed select-none text-center">
              Coming Soon
            </span>
          ) : (
            /* Active product buttons */
            <>
              <Link
                href={`/products/${product.slug}`}
                className="flex-1 inline-flex items-center justify-center py-3 px-1.5 text-[0.85rem] font-semibold rounded-[30px] border-2 border-[#1C3C5F] text-[#1C3C5F] hover:bg-[#1C3C5F] hover:text-white hover:-translate-y-0.5 transition-all text-center"
              >
                View Details
              </Link>
              <button
                onClick={() =>
                  addToCart(
                    { id: product.id, name: product.name, premium: product.premium, slug: product.slug },
                    true
                  )
                }
                className="flex-1 inline-flex items-center justify-center py-3 px-1.5 text-[0.85rem] font-semibold rounded-[30px] bg-[#D43F33] text-white shadow-[0_4px_14px_rgba(212,63,51,0.3)] hover:bg-[#b8352b] hover:-translate-y-0.5 transition-all"
              >
                Buy Now
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
