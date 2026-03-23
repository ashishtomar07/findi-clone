import PageHero from "@/components/PageHero";
import settings from "@/data/settings.json";

export const metadata = {
  title: "Contact — FindiInsure",
  description: "Get in touch with FindiInsure for insurance queries and support.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" subtitle="We're here to help with your insurance needs" />
      <section className="py-20 max-md:py-14">
        <div className="max-w-[1200px] mx-auto px-6 max-md:px-5">
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
            {/* Phone */}
            <div className="bg-white border border-[#E2E8F0] rounded-[14px] p-9 px-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-transparent">
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-[rgba(28,60,95,0.08)] to-[rgba(28,60,95,0.03)] rounded-full text-2xl">
                📞
              </div>
              <h4 className="text-[1.05rem] font-bold text-[#1A1F2B] mb-2">Phone</h4>
              <p className="text-[0.95rem] text-[#8A94A6] mb-0">
                <a href={`tel:${settings.supportPhone.replace(/[^0-9+]/g, "")}`} className="text-[#1C3C5F] font-semibold hover:text-[#D43F33] transition-colors">
                  {settings.supportPhone}
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="bg-white border border-[#E2E8F0] rounded-[14px] p-9 px-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-transparent">
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-[rgba(28,60,95,0.08)] to-[rgba(28,60,95,0.03)] rounded-full text-2xl">
                ✉️
              </div>
              <h4 className="text-[1.05rem] font-bold text-[#1A1F2B] mb-2">Email</h4>
              <p className="text-[0.95rem] text-[#8A94A6] mb-0">
                <a href={`mailto:${settings.supportEmail}`} className="text-[#1C3C5F] font-semibold hover:text-[#D43F33] transition-colors">
                  {settings.supportEmail}
                </a>
              </p>
            </div>

            {/* WhatsApp */}
            <div className="bg-white border border-[#E2E8F0] rounded-[14px] p-9 px-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-transparent">
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-[rgba(28,60,95,0.08)] to-[rgba(28,60,95,0.03)] rounded-full text-2xl">
                💬
              </div>
              <h4 className="text-[1.05rem] font-bold text-[#1A1F2B] mb-2">WhatsApp</h4>
              <p className="text-[0.95rem] text-[#8A94A6] mb-0">
                <a
                  href={`https://wa.me/${settings.supportWhatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1C3C5F] font-semibold hover:text-[#D43F33] transition-colors"
                >
                  {settings.supportWhatsapp}
                </a>
              </p>
            </div>
          </div>

          {/* Address box */}
          <div className="max-w-[640px] mx-auto mt-12 bg-[#F1F3F6] rounded-[14px] p-9 px-10 text-center">
            <h4 className="text-[1.25rem] font-bold text-[#1A1F2B] mb-3">Our Office</h4>
            <p className="text-[#8A94A6] mb-0">{settings.address}</p>
          </div>
        </div>
      </section>
    </>
  );
}
