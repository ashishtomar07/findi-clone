"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function VerifyMobilePage() {
  const router = useRouter();
  const { items, totalAmount, clearCart } = useCart();
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpSent, setOtpSent] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Load mobile from checkout details
    try {
      const details = sessionStorage.getItem("checkout_details");
      if (details) {
        const parsed = JSON.parse(details);
        if (parsed.mobile) setMobile(parsed.mobile);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSendOtp = () => {
    if (!mobile || mobile.length < 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    setOtpSent(true);
    // Focus first OTP input
    setTimeout(() => inputRefs.current[0]?.focus(), 100);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const otpValue = otp.join("");
    if (otpValue.length < 6) {
      alert("Please enter the complete 6-digit OTP.");
      return;
    }
    setVerifying(true);

    // Simulate verification
    setTimeout(() => {
      // Generate a reference number
      const refNo = `FI${Date.now().toString().slice(-8)}`;
      sessionStorage.setItem("order_ref", refNo);
      clearCart();
      sessionStorage.removeItem("checkout_details");
      router.push(`/order-success?ref=${encodeURIComponent(refNo)}`);
    }, 1500);
  };

  // Redirect if no cart items and no checkout details
  const hasCheckoutData = typeof window !== "undefined" && sessionStorage.getItem("checkout_details");

  if (!hasCheckoutData && items.length === 0) {
    return (
      <>
        <section className="bg-gradient-to-br from-[#1C3C5F] to-[#142d47] pt-[calc(72px+48px)] max-md:pt-[calc(64px+48px)] pb-12 text-center">
          <h1 className="text-white text-[2.25rem] max-md:text-[1.75rem] font-bold">Verify Mobile</h1>
        </section>
        <section className="py-20 text-center px-6">
          <div className="text-[4rem] mb-5 opacity-50">🔒</div>
          <h2 className="text-[1.5rem] font-bold text-[#1A1F2B] mb-3">No checkout in progress</h2>
          <p className="text-[#8A94A6] mb-7">Please add products and complete checkout first.</p>
          <button
            onClick={() => router.push("/products")}
            className="inline-flex items-center justify-center py-3.5 px-8 font-semibold rounded-[30px] bg-[#1C3C5F] text-white hover:bg-[#264d78] transition-all"
          >
            Browse Products
          </button>
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
          <h1 className="text-white text-[2.25rem] max-md:text-[1.75rem] font-bold mb-3">
            Verify Mobile Number
          </h1>
          <p className="text-white/70 text-[1.05rem] max-w-[520px] mx-auto">
            We need to verify your mobile number to complete the purchase
          </p>
        </div>
      </section>

      <section className="py-20 max-md:py-14">
        <div className="max-w-[1200px] mx-auto px-6 max-md:px-5">
          <div className="max-w-[450px] mx-auto bg-white rounded-[18px] border border-[#E2E8F0] shadow-md p-10 max-md:p-7 text-center">
            {!otpSent ? (
              <>
                <div className="text-[3rem] mb-5">📱</div>
                <h2 className="text-[1.4rem] font-bold text-[#1C3C5F] mb-3">Verify Your Number</h2>
                <p className="text-[#8A94A6] text-[0.95rem] mb-8">
                  We&apos;ll send a 6-digit OTP to verify your mobile number
                </p>

                <div className="mb-6 text-left">
                  <label className="block text-[0.9rem] font-semibold text-[#1A1F2B] mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    placeholder="Enter 10-digit mobile number"
                    maxLength={10}
                    className="w-full py-3.5 px-[18px] border-2 border-[#E2E8F0] rounded-[10px] text-base text-[#1A1F2B] bg-white transition-colors focus:border-[#1C3C5F] focus:shadow-[0_0_0_3px_rgba(28,60,95,0.08)] focus:outline-none placeholder:text-[#8A94A6] text-center text-lg tracking-widest font-semibold"
                  />
                </div>

                <button
                  onClick={handleSendOtp}
                  className="w-full py-3.5 font-semibold rounded-[30px] bg-[#1C3C5F] text-white shadow-[0_4px_14px_rgba(28,60,95,0.2)] hover:bg-[#264d78] hover:-translate-y-0.5 transition-all"
                >
                  Send OTP
                </button>
              </>
            ) : (
              <>
                <div className="text-[3rem] mb-5">🔐</div>
                <h2 className="text-[1.4rem] font-bold text-[#1C3C5F] mb-3">Enter OTP</h2>
                <p className="text-[#8A94A6] text-[0.95rem] mb-8">
                  A 6-digit code has been sent to{" "}
                  <span className="font-semibold text-[#1A1F2B]">+91 {mobile}</span>
                </p>

                {/* OTP Inputs */}
                <div className="flex gap-3 justify-center mb-8">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      ref={(el) => { inputRefs.current[i] = el; }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(i, e)}
                      className="w-12 h-14 border-2 border-[#E2E8F0] rounded-[10px] text-center text-xl font-bold text-[#1A1F2B] transition-all focus:border-[#1C3C5F] focus:shadow-[0_0_0_3px_rgba(28,60,95,0.08)] focus:outline-none"
                    />
                  ))}
                </div>

                <button
                  onClick={handleVerify}
                  disabled={verifying}
                  className="w-full py-3.5 font-semibold rounded-[30px] bg-[#D43F33] text-white shadow-[0_4px_14px_rgba(212,63,51,0.3)] hover:bg-[#b8352b] hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {verifying ? "Verifying..." : "Verify & Pay"}
                </button>

                <button
                  onClick={() => { setOtpSent(false); setOtp(["", "", "", "", "", ""]); }}
                  className="mt-4 text-[0.9rem] text-[#8A94A6] hover:text-[#1C3C5F] transition-colors"
                >
                  Resend OTP / Change Number
                </button>

                {/* Order summary mini */}
                <div className="mt-8 pt-6 border-t border-[#E2E8F0] text-left">
                  <div className="text-[0.8rem] uppercase tracking-[0.05em] font-medium text-[#8A94A6] mb-3">
                    Amount to Pay
                  </div>
                  <div className="text-[1.5rem] font-extrabold text-[#1C3C5F]">
                    ₹{totalAmount.toLocaleString("en-IN")}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
