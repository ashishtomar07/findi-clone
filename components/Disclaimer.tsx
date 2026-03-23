import settings from "@/data/settings.json";

export default function Disclaimer() {
  return (
    <section className="bg-[#F1F3F6] py-8 border-t border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-6 max-md:px-5">
        <div className="max-w-[900px] mx-auto text-center">
          <h4 className="text-[#1A1F2B] text-[0.95rem] mb-3 uppercase tracking-[0.05em] font-bold">
            Insurance Disclaimer
          </h4>
          <p className="text-[#8A94A6] text-[0.85rem] leading-[1.7] mb-0">
            {settings.disclaimerText}
          </p>
        </div>
      </div>
    </section>
  );
}
