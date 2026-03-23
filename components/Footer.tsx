import Link from "next/link";
import Image from "next/image";
import settings from "@/data/settings.json";

export default function Footer() {
  return (
    <footer className="bg-[#142d47] text-white/75 pt-16">
      <div className="max-w-[1200px] mx-auto px-6 max-md:px-5">
        {/* Grid */}
        <div className="grid grid-cols-[2fr_1fr_1fr_1.5fr] max-lg:grid-cols-2 max-md:grid-cols-1 gap-12 max-lg:gap-9 max-md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <Image
              src={settings.logoPath}
              alt="FindiInsure Insurance"
              width={200}
              height={54}
              className="h-[54px] w-auto object-contain mb-5"
            />
            <h3 className="text-white text-[1.3rem] font-bold mb-2 tracking-wide">
              {settings.companyName}
            </h3>
            <p className="text-white/50 text-[0.85rem] mb-4">
              {settings.companyGroup}
            </p>
            <p className="text-[0.9rem] leading-[1.7] mb-4">
              Your trusted insurance marketplace — compare, choose, and secure the best insurance plans.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.06] border border-white/[0.08] rounded-[10px] text-[0.8rem] text-white/60">
              {settings.irdaNo}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-[0.95rem] font-semibold uppercase tracking-[0.06em] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {settings.footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.9rem] hover:text-white hover:pl-1 transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white text-[0.95rem] font-semibold uppercase tracking-[0.06em] mb-5">
              Pages
            </h4>
            <ul className="space-y-3">
              {settings.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.9rem] hover:text-white hover:pl-1 transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-[0.95rem] font-semibold uppercase tracking-[0.06em] mb-5">
              Support
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[0.9rem]">
                <span className="w-9 h-9 flex items-center justify-center bg-white/[0.06] rounded-full text-base flex-shrink-0">
                  📞
                </span>
                <a href={`tel:${settings.supportPhone.replace(/[^0-9+]/g, "")}`} className="hover:text-white transition-colors">
                  {settings.supportPhone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-[0.9rem]">
                <span className="w-9 h-9 flex items-center justify-center bg-white/[0.06] rounded-full text-base flex-shrink-0">
                  ✉️
                </span>
                <a href={`mailto:${settings.supportEmail}`} className="hover:text-white transition-colors">
                  {settings.supportEmail}
                </a>
              </div>
              <div className="flex items-center gap-3 text-[0.9rem]">
                <span className="w-9 h-9 flex items-center justify-center bg-white/[0.06] rounded-full text-base flex-shrink-0">
                  💬
                </span>
                <a
                  href={`https://wa.me/${settings.supportWhatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {settings.supportWhatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.08] py-6 flex items-center justify-between text-[0.85rem] text-white/40 max-md:flex-col max-md:gap-2 max-md:text-center">
          <span>© {new Date().getFullYear()} {settings.companyName}. All rights reserved.</span>
          <span>{settings.address}</span>
        </div>
      </div>
    </footer>
  );
}
