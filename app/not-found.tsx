import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1C3C5F] to-[#142d47] pt-[calc(72px+48px)] pb-12 text-center">
        <h1 className="text-white text-[2.25rem] font-bold">Page Not Found</h1>
      </section>
      <section className="py-20">
        <div className="text-center px-6">
          <div className="text-[4rem] mb-5 opacity-50">🔍</div>
          <h2 className="text-[1.5rem] font-bold text-[#1A1F2B] mb-3">404 — Not Found</h2>
          <p className="text-[#8A94A6] mb-7">The page you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/"
            className="inline-flex items-center justify-center py-3.5 px-8 font-semibold rounded-[30px] bg-[#1C3C5F] text-white hover:bg-[#264d78] transition-all"
          >
            Go Home
          </Link>
        </div>
      </section>
    </>
  );
}
