import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[560px] max-md:min-h-0 flex items-center bg-gradient-to-br from-[#1C3C5F] via-[#142d47] to-[#0f2336] pt-[72px] max-md:pt-16 overflow-hidden">
      {/* Radial gradient accents */}
      <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,63,51,0.12)_0%,transparent_70%)] -top-[100px] -right-[100px] pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.04)_0%,transparent_70%)] -bottom-20 -left-20 pointer-events-none" />

      <div className="w-full max-w-[1200px] mx-auto px-6 max-md:px-5">
        <div className="relative z-[2] max-w-[640px] py-20 max-md:py-12 max-md:pb-14">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/10 border border-white/15 rounded-full text-white/85 text-[0.85rem] font-medium mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-[#4ADE80] rounded-full animate-pulse" />
            IRDA Registered Corporate Agent
          </div>

          {/* Title */}
          <h1 className="text-white text-[3.25rem] max-md:text-[2.25rem] max-[480px]:text-[1.85rem] font-bold leading-[1.15] mb-5 tracking-tight">
            Insurance marketplace
            <br />
            <span className="bg-gradient-to-br from-[#D43F33] to-[#E86558] bg-clip-text text-transparent">
              built for you
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/75 text-[1.15rem] leading-[1.7] mb-9 max-w-[520px]">
            Compare, choose, and secure the best insurance plans with FindiInsure — your trusted partner for a secure future.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap max-md:flex-col">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-[1.1rem] font-semibold rounded-[30px] bg-[#D43F33] text-white shadow-[0_4px_20px_rgba(212,63,51,0.4)] hover:bg-[#b8352b] hover:-translate-y-0.5 transition-all max-md:w-full"
            >
              View All Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-[1.1rem] font-semibold rounded-[30px] bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5 transition-all max-md:w-full"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Floating shapes */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] pointer-events-none overflow-hidden max-md:hidden" aria-hidden="true">
        <div className="absolute w-[300px] h-[300px] rounded-full bg-white opacity-[0.06] top-[15%] right-[10%] animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute w-[200px] h-[200px] rounded-full bg-white opacity-[0.06] top-[50%] right-[30%] animate-[float_6s_ease-in-out_infinite_reverse]" />
        <div className="absolute w-[120px] h-[120px] rounded-full bg-white opacity-[0.06] bottom-[15%] right-[15%] animate-[float_10s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
