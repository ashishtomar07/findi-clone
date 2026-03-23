interface Feature {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[14px] p-9 px-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(28,60,95,0.08),0_4px_6px_-2px_rgba(28,60,95,0.04)] hover:border-transparent">
      <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-[rgba(28,60,95,0.08)] to-[rgba(28,60,95,0.03)] rounded-[14px] text-2xl">
        {feature.icon}
      </div>
      <h4 className="text-[1.05rem] font-bold text-[#1A1F2B] mb-2.5">
        {feature.title}
      </h4>
      <p className="text-[0.9rem] text-[#8A94A6] mb-0 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
