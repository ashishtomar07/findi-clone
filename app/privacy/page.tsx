import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Privacy Policy — FindiInsure",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="py-20 max-md:py-14">
        <div className="max-w-[800px] mx-auto px-6 max-md:px-5">
          <p className="text-[0.9rem] text-[#8A94A6] mb-10">Last updated: March 2026</p>
          <div className="space-y-9">
            <div className="pb-9 border-b border-[#E2E8F0]">
              <h3 className="text-[1.2rem] text-[#1C3C5F] font-bold mb-3">Information We Collect</h3>
              <p className="text-[#4A5568] leading-[1.8]">
                We collect personal information that you provide when using our services, including name, email address, phone number, and payment details for insurance purchases. We also collect usage data through cookies and analytics tools.
              </p>
            </div>
            <div className="pb-9 border-b border-[#E2E8F0]">
              <h3 className="text-[1.2rem] text-[#1C3C5F] font-bold mb-3">How We Use Your Information</h3>
              <p className="text-[#4A5568] leading-[1.8]">
                Your information is used to process insurance applications, provide customer support, send policy-related communications, and improve our services. We do not sell your personal data to third parties.
              </p>
            </div>
            <div>
              <h3 className="text-[1.2rem] text-[#1C3C5F] font-bold mb-3">Contact Us</h3>
              <p className="text-[#4A5568] leading-[1.8]">
                For questions about this privacy policy, please contact us at support@findiinsure.com or call +91 8142600000.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
