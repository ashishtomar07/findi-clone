"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import settings from "@/data/settings.json";

const navItems = settings.navigation;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { itemCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-[72px] max-md:h-16 bg-white/95 backdrop-blur-xl border-b border-slate-200/60 z-[1000] transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex items-center justify-between h-full max-w-[1200px] mx-auto px-6 max-md:px-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src={settings.logoPath}
            alt="FindiInsure Insurance"
            width={180}
            height={48}
            className="h-12 max-md:h-[38px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          className={`flex items-center gap-1 max-md:fixed max-md:top-16 max-md:left-0 max-md:right-0 max-md:bg-white max-md:flex-col max-md:p-4 max-md:gap-1 max-md:border-b max-md:border-slate-200 max-md:shadow-lg max-md:z-[999] max-md:transition-transform max-md:duration-300 ${
            menuOpen ? "max-md:translate-y-0" : "max-md:-translate-y-[110%]"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-[18px] py-2 text-[0.95rem] font-medium rounded-[10px] transition-all max-md:w-full max-md:px-4 max-md:py-3 max-md:text-base ${
                pathname === item.href
                  ? "text-[#1C3C5F] bg-[rgba(28,60,95,0.06)]"
                  : "text-[#4A5568] hover:text-[#1C3C5F] hover:bg-[rgba(28,60,95,0.06)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Cart */}
          <Link
            href="/cart"
            className="relative w-[42px] h-[42px] flex items-center justify-center rounded-full bg-[#F1F3F6] transition-all text-[#1C3C5F] hover:bg-[#1C3C5F] hover:text-white"
            aria-label="Cart"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D43F33] text-white rounded-full text-[0.7rem] font-bold flex items-center justify-center border-2 border-white">
                {itemCount}
              </span>
            )}
          </Link>

          {/* Mobile Toggle */}
          <button
            className="hidden max-md:flex w-[42px] h-[42px] items-center justify-center rounded-[10px] text-[#1C3C5F]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-[22px] h-0.5 bg-[#1C3C5F] rounded-sm relative transition-all ${
                menuOpen ? "bg-transparent" : ""
              }`}
            >
              <span
                className={`absolute w-full h-0.5 bg-[#1C3C5F] rounded-sm transition-all ${
                  menuOpen ? "top-0 rotate-45" : "-top-[7px]"
                }`}
              />
              <span
                className={`absolute w-full h-0.5 bg-[#1C3C5F] rounded-sm transition-all ${
                  menuOpen ? "bottom-0 -rotate-45" : "-bottom-[7px]"
                }`}
              />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
