import FeatureCard from "./FeatureCard";
import settings from "@/data/settings.json";

export default function FeaturesGrid() {
  return (
    <section className="py-20 max-md:py-14 bg-[#F1F3F6]">
      <div className="max-w-[1200px] mx-auto px-6 max-md:px-5">
        <div className="text-center mb-12">
          <h2 className="text-[2rem] max-md:text-[1.6rem] font-bold text-[#1A1F2B] mb-3 tracking-tight">
            Why Choose FindiInsure?
          </h2>
          <p className="text-[#8A94A6] text-[1.1rem] max-w-[580px] mx-auto">
            Trusted by thousands — backed by a Findi Group company
          </p>
        </div>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
          {settings.features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
