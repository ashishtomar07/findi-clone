"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart, CartItem } from "@/context/CartContext";

const INPUT_CLASS =
  "py-3 px-4 border border-[#E2E8F0] rounded-[10px] text-[0.95rem] transition-all focus:outline-none focus:border-[#1C3C5F] focus:shadow-[0_0_0_3px_rgba(28,60,95,0.1)] w-full";

// --------------- per-product field configs ---------------
interface FieldDef {
  name: string;
  label: string;
  type: "text" | "tel" | "email" | "date";
  placeholder: string;
  maxLength?: number;
  pattern?: string;
}

const COMMON_FIELDS: FieldDef[] = [
  { name: "fullName", label: "Full Name", type: "text", placeholder: "Full Name" },
  { name: "mobile", label: "Mobile Number", type: "tel", placeholder: "Mobile Number", maxLength: 10, pattern: "[0-9]{10}" },
  { name: "email", label: "Email Address", type: "email", placeholder: "Email Address" },
];

const PRODUCT_FIELDS: Record<string, FieldDef[]> = {
  // Mobile Damage Protection
  "mobile-insurance": [
    ...COMMON_FIELDS,
    { name: "deviceBrandModel", label: "Device Brand & Model", type: "text", placeholder: "Device Brand & Model" },
    { name: "imei", label: "IMEI Number", type: "text", placeholder: "IMEI Number", maxLength: 15 },
    { name: "devicePurchaseDate", label: "Device Purchase Date", type: "date", placeholder: "" },
  ],
  // mSwasth
  mswasth: [
    ...COMMON_FIELDS,
    { name: "dob", label: "Date of Birth", type: "date", placeholder: "dd-mm-yyyy" },
    { name: "pincode", label: "Pincode", type: "text", placeholder: "Pincode", maxLength: 6, pattern: "[0-9]{6}" },
  ],
  // Cyber Protection
  "cyber-protection": [
    ...COMMON_FIELDS,
  ],
};

// Fallback for products not explicitly listed — basic fields + DOB + Pincode
const DEFAULT_FIELDS: FieldDef[] = [
  ...COMMON_FIELDS,
  { name: "dob", label: "Date of Birth", type: "date", placeholder: "dd-mm-yyyy" },
  { name: "pincode", label: "Pincode", type: "text", placeholder: "Pincode", maxLength: 6, pattern: "[0-9]{6}" },
];

function getFieldsForProduct(slug: string): FieldDef[] {
  return PRODUCT_FIELDS[slug] ?? DEFAULT_FIELDS;
}

// --------------- component ---------------
export default function CheckoutPage() {
  const { items, totalAmount } = useCart();
  const router = useRouter();

  // Build per-product form state: { [productId]: { fieldName: value } }
  const buildInitial = () => {
    const state: Record<string, Record<string, string>> = {};
    items.forEach((item) => {
      const fields = getFieldsForProduct(item.slug);
      const vals: Record<string, string> = {};
      fields.forEach((f) => (vals[f.name] = ""));
      state[item.id] = vals;
    });
    return state;
  };

  const [forms, setForms] = useState<Record<string, Record<string, string>>>(buildInitial);
  const [agreedTerms, setAgreedTerms] = useState(false);

  const handleChange = (productId: string, fieldName: string, value: string) => {
    setForms((prev) => ({
      ...prev,
      [productId]: { ...prev[productId], [fieldName]: value },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedTerms) {
      alert("Please agree to the terms and conditions to proceed.");
      return;
    }
    // Find any mobile field to pass to verification page
    const firstMobile = Object.values(forms).find((f) => f.mobile)?.mobile ?? "";
    sessionStorage.setItem(
      "checkout_details",
      JSON.stringify({ forms, totalAmount, mobile: firstMobile })
    );
    router.push("/verify-mobile");
  };

  if (items.length === 0) {
    return (
      <>
        <section className="bg-gradient-to-br from-[#1C3C5F] to-[#142d47] pt-[calc(72px+48px)] max-md:pt-[calc(64px+48px)] pb-12 text-center relative overflow-hidden">
          <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(212,63,51,0.1)_0%,transparent_70%)] -top-[100px] -right-[50px] pointer-events-none" />
          <div className="max-w-[1200px] mx-auto px-6 max-md:px-5 relative z-[1]">
            <h1 className="text-white text-[2.25rem] max-md:text-[1.75rem] font-bold mb-3">Checkout</h1>
          </div>
        </section>
        <section className="py-20 max-md:py-14">
          <div className="max-w-[1200px] mx-auto px-6 max-md:px-5 text-center">
            <div className="text-[4rem] mb-5 opacity-20">🛒</div>
            <h2 className="text-[1.5rem] font-bold text-[#1A1F2B] mb-3">Your cart is empty</h2>
            <p className="text-[#8A94A6] mb-7">Add some products before proceeding to checkout.</p>
            <Link
              href="/products"
              className="inline-flex items-center justify-center py-3.5 px-8 font-semibold rounded-[30px] bg-[#D43F33] text-white shadow-[0_4px_14px_rgba(212,63,51,0.3)] hover:bg-[#b8352b] hover:-translate-y-0.5 transition-all"
            >
              Browse Products
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#1C3C5F] to-[#142d47] pt-[calc(72px+48px)] max-md:pt-[calc(64px+48px)] pb-12 text-center relative overflow-hidden">
        <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(212,63,51,0.1)_0%,transparent_70%)] -top-[100px] -right-[50px] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 max-md:px-5 relative z-[1]">
          <h1 className="text-white text-[2.25rem] max-md:text-[1.75rem] font-bold mb-3">Checkout</h1>
          <p className="text-white/70 text-[1.05rem] max-w-[520px] mx-auto">
            Complete your details to purchase insurance
          </p>
        </div>
      </section>

      <section className="py-20 max-md:py-14">
        <div className="max-w-[1200px] mx-auto px-6 max-md:px-5">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-[1fr_360px] max-lg:grid-cols-1 gap-8 items-start">
              {/* Left: per-product forms */}
              <div className="flex flex-col gap-6">
                {items.map((item) => (
                  <ProductForm
                    key={item.id}
                    item={item}
                    values={forms[item.id] ?? {}}
                    onChange={(field, val) => handleChange(item.id, field, val)}
                  />
                ))}
              </div>

              {/* Right: Order Summary Sidebar */}
              <div className="max-lg:order-first sticky top-[100px] flex flex-col gap-6">
                <div className="bg-white rounded-[18px] border border-[#E2E8F0] shadow-md p-6">
                  <h3 className="text-[1.25rem] font-bold text-[#1A1F2B] mb-5 pb-3 border-b border-[#E2E8F0]">
                    Order Summary
                  </h3>
                  <div className="flex flex-col gap-3 mb-5">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-[0.95rem]">
                        <span className="text-[#8A94A6]">{item.name}</span>
                        <span className="font-semibold text-[#1A1F2B]">
                          ₹{item.premium.toLocaleString("en-IN")}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t-2 border-[#F1F3F6] flex justify-between items-baseline">
                    <span className="font-bold text-[1.1rem]">Total</span>
                    <span className="text-[1.75rem] font-extrabold text-[#1C3C5F]">
                      ₹{totalAmount.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 mt-5">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={agreedTerms}
                      onChange={(e) => setAgreedTerms(e.target.checked)}
                      className="mt-1 w-[18px] h-[18px] cursor-pointer accent-[#1C3C5F]"
                    />
                    <label htmlFor="terms" className="text-[0.9rem] text-[#8A94A6] leading-[1.5] cursor-pointer">
                      I agree to the{" "}
                      <Link href="/terms" className="text-[#1C3C5F] font-semibold underline">
                        Terms &amp; Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-[#1C3C5F] font-semibold underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  <div className="mt-5">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center py-3.5 px-8 font-semibold rounded-[30px] bg-[#D43F33] text-white shadow-[0_4px_14px_rgba(212,63,51,0.3)] hover:bg-[#b8352b] hover:-translate-y-0.5 transition-all"
                    >
                      Continue to Verification
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

// --------------- per-product form card ---------------
function ProductForm({
  item,
  values,
  onChange,
}: {
  item: CartItem;
  values: Record<string, string>;
  onChange: (field: string, value: string) => void;
}) {
  const fields = getFieldsForProduct(item.slug);

  return (
    <div className="bg-white rounded-[18px] border border-[#E2E8F0] shadow-sm overflow-hidden">
      <div className="px-6 py-5 bg-[#F1F3F6] border-b border-[#E2E8F0] font-bold text-[#1C3C5F] flex items-center gap-3">
        🛡️ {item.name} Details
      </div>
      <div className="p-6 grid grid-cols-2 max-sm:grid-cols-1 gap-5">
        {fields.map((f) => (
          <div key={f.name} className="flex flex-col gap-2">
            <label className="text-[0.9rem] font-semibold text-[#1A1F2B]">
              {f.label} <span className="text-[#D43F33] ml-0.5">*</span>
            </label>
            <input
              type={f.type}
              name={f.name}
              value={values[f.name] ?? ""}
              onChange={(e) => onChange(f.name, e.target.value)}
              required
              placeholder={f.placeholder}
              maxLength={f.maxLength}
              pattern={f.pattern}
              className={INPUT_CLASS}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

