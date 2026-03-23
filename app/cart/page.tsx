"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeFromCart, totalAmount } = useCart();

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#1C3C5F] to-[#142d47] pt-[calc(72px+48px)] max-md:pt-[calc(64px+48px)] pb-12 text-center relative overflow-hidden">
        <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(212,63,51,0.1)_0%,transparent_70%)] -top-[100px] -right-[50px] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 max-md:px-5 relative z-[1]">
          <h1 className="text-white text-[2.25rem] max-md:text-[1.75rem] font-bold mb-3">
            Your Cart
          </h1>
          <p className="text-white/70 text-[1.05rem] max-w-[520px] mx-auto">
            Review your selected insurance plans
          </p>
        </div>
      </section>

      <section className="py-20 max-md:py-14">
        <div className="max-w-[1200px] mx-auto px-6 max-md:px-5">
          {items.length === 0 ? (
            /* Empty cart */
            <div className="max-w-[800px] mx-auto bg-white rounded-[18px] border border-[#E2E8F0] shadow-md overflow-hidden">
              <div className="text-center py-20 px-12">
                <div className="text-[4.5rem] mb-6 opacity-20">🛒</div>
                <h2 className="text-[1.5rem] font-bold text-[#1A1F2B] mb-3">Your cart is empty</h2>
                <p className="text-[#8A94A6] mb-8">
                  Looks like you haven&apos;t added any insurance plans to your cart yet.
                </p>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center py-3.5 px-8 font-semibold rounded-[30px] bg-[#D43F33] text-white shadow-[0_4px_14px_rgba(212,63,51,0.3)] hover:bg-[#b8352b] hover:-translate-y-0.5 transition-all"
                >
                  Browse Products
                </Link>
              </div>
            </div>
          ) : (
            /* Cart with items */
            <div className="max-w-[800px] mx-auto bg-white rounded-[18px] border border-[#E2E8F0] shadow-md overflow-hidden">
              {/* Items */}
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center py-6 px-8 max-md:px-5 border-b border-[#E2E8F0] last:border-b-0 gap-6 max-md:flex-wrap max-md:gap-4"
                >
                  <div className="flex-1 max-md:w-full max-md:flex-none">
                    <h3 className="text-[1.1rem] font-bold text-[#1A1F2B] mb-1">{item.name}</h3>
                    <p className="text-[0.85rem] text-[#8A94A6]">
                      ₹{item.premium.toLocaleString("en-IN")} / year
                    </p>
                  </div>
                  <div className="text-right text-[1.15rem] font-bold text-[#1C3C5F] px-4 max-md:flex-1 max-md:text-left max-md:order-1">
                    ₹{item.premium.toLocaleString("en-IN")}
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-[#8A94A6] hover:bg-[rgba(212,63,51,0.1)] hover:text-[#D43F33] p-2 rounded-full transition-all max-md:order-3"
                    aria-label="Remove item"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                    </svg>
                  </button>
                </div>
              ))}

              {/* Summary */}
              <div className="p-8 border-t-2 border-[#F1F3F6] bg-[#F8F9FB] flex flex-col items-end gap-5 max-md:items-stretch">
                <div className="flex items-baseline gap-4">
                  <span className="text-[1.1rem] font-semibold text-[#1A1F2B]">Total:</span>
                  <span className="text-[2rem] max-md:text-[1.5rem] font-extrabold text-[#1C3C5F]">
                    ₹{totalAmount.toLocaleString("en-IN")}
                  </span>
                </div>
                <Link
                  href="/checkout"
                  className="inline-flex items-center justify-center py-3.5 px-8 font-semibold rounded-[30px] bg-[#D43F33] text-white shadow-[0_4px_14px_rgba(212,63,51,0.3)] hover:bg-[#b8352b] hover:-translate-y-0.5 transition-all"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
