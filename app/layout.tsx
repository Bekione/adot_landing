import type { Metadata } from "next";
import { manropeReg, manropeThin, techniqNormal, techniqOutlined } from "@/styles/fonts";
import "./globals.css";
import Header from "@/components/Header";


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
        className={`${manropeReg.variable} ${manropeThin.variable} ${techniqNormal.variable} ${techniqOutlined.variable} antialiased`}
      >
         <Header />
        {children}
      </body>
    </html>
  );
}
