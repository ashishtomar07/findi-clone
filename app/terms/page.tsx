import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Terms & Conditions — FindiInsure",
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" />
      <section className="py-20 max-md:py-14">
        <div className="max-w-[800px] mx-auto px-6 max-md:px-5">
          <p className="text-[0.9rem] text-[#8A94A6] mb-10">Last updated: March 2026</p>
          <div className="space-y-9">
            <div className="pb-9 border-b border-[#E2E8F0]">
              <h3 className="text-[1.2rem] text-[#1C3C5F] font-bold mb-3">Acceptance of Terms</h3>
              <p className="text-[#4A5568] leading-[1.8]">
                By accessing and using FindiInsure, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our services.
              </p>
            </div>
            <div className="pb-9 border-b border-[#E2E8F0]">
              <h3 className="text-[1.2rem] text-[#1C3C5F] font-bold mb-3">Insurance Products</h3>
              <p className="text-[#4A5568] leading-[1.8]">
                FindiInsure acts as a corporate agent (CA0837) under IRDA regulations. Insurance products are offered by respective insurance companies. Policy issuance, claims, and coverage are subject to the insurer&apos;s terms and conditions.
              </p>
            </div>
            <div>
              <h3 className="text-[1.2rem] text-[#1C3C5F] font-bold mb-3">Limitation of Liability</h3>
              <p className="text-[#4A5568] leading-[1.8]">
                Bankit Services Pvt Ltd shall not be liable for any indirect, incidental, or consequential damages arising from the use of this platform or any insurance products purchased through it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
