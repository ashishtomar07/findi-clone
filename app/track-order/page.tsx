"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";

export default function TrackOrderPage() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <>
      <PageHero title="Track Your Order" subtitle="Enter your details to check your policy status" />
      <section className="py-20 max-md:py-14">
        <div className="max-w-[1200px] mx-auto px-6 max-md:px-5">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-[480px] mx-auto bg-white border border-[#E2E8F0] rounded-[18px] p-12 px-10 max-md:p-8 max-md:px-6 shadow-md">
              <div className="mb-6">
                <label className="block text-[0.9rem] font-semibold text-[#1A1F2B] mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your registered mobile number"
                  className="w-full py-3.5 px-[18px] border-2 border-[#E2E8F0] rounded-[10px] text-base text-[#1A1F2B] bg-white transition-colors focus:border-[#1C3C5F] focus:shadow-[0_0_0_3px_rgba(28,60,95,0.08)] placeholder:text-[#8A94A6]"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 font-semibold rounded-[30px] bg-[#1C3C5F] text-white shadow-[0_4px_14px_rgba(28,60,95,0.2)] hover:bg-[#264d78] hover:-translate-y-0.5 transition-all"
              >
                Track Order
              </button>
            </form>
          ) : (
            <div className="max-w-[450px] mx-auto bg-white rounded-[18px] border border-[#E2E8F0] shadow-md p-10 text-center">
              <h2 className="text-[1.5rem] font-bold text-[#1C3C5F] mb-3">Verification Sent</h2>
              <p className="text-[#8A94A6] text-[0.95rem] mb-8">
                We&apos;ve sent a verification code to your registered mobile number. Please check your SMS.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center justify-center py-3 px-8 font-semibold rounded-[30px] border-2 border-[#1C3C5F] text-[#1C3C5F] hover:bg-[#1C3C5F] hover:text-white transition-all"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
