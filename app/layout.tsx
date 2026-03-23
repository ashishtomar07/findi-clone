import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Disclaimer from "@/components/Disclaimer";
import ScrollToTop from "@/components/ScrollToTop";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FindiInsure — Insurance Marketplace Built for You",
  description:
    "Compare, choose, and secure the best insurance plans with FindiInsure — your trusted partner for a secure future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans text-[#4A5568] bg-white antialiased overflow-x-hidden">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Disclaimer />
          <Footer />
          <ScrollToTop />
        </CartProvider>
      </body>
    </html>
  );
}
