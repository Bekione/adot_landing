import type { Metadata } from "next";
import { manropeReg, manropeThin, ubuntuReg, ubuntuBold, techniqNormal, techniqOutlined } from "@/styles/fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Adot Solutions",
  description: "Your one-stop solution for creative websites, custom software, and tailored services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manropeReg.variable} ${manropeThin.variable} ${ubuntuReg.variable} ${ubuntuBold.variable} ${techniqNormal.variable} ${techniqOutlined.variable} antialiased relative min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
