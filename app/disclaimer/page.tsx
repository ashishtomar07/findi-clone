import PageHero from "@/components/PageHero";
import settings from "@/data/settings.json";

export const metadata = {
  title: "Disclaimer — FindiInsure",
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero title="Disclaimer" />
      <section className="py-20 max-md:py-14">
        <div className="max-w-[800px] mx-auto px-6 max-md:px-5">
          <div className="pb-9 border-b border-[#E2E8F0]">
            <h3 className="text-[1.2rem] text-[#1C3C5F] font-bold mb-3">Insurance Disclaimer</h3>
            <p className="text-[#4A5568] leading-[1.8]">{settings.disclaimerText}</p>
          </div>
        </div>
      </section>
    </>
  );
}
