export default function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-gradient-to-br from-[#1C3C5F] to-[#142d47] pt-[calc(72px+48px)] max-md:pt-[calc(64px+48px)] pb-12 text-center relative overflow-hidden">
      <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(212,63,51,0.1)_0%,transparent_70%)] -top-[100px] -right-[50px] pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-6 max-md:px-5 relative z-[1]">
        <h1 className="text-white text-[2.25rem] max-md:text-[1.75rem] font-bold mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/70 text-[1.05rem] max-w-[520px] mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
