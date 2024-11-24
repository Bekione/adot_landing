import type { Metadata } from "next";
import { techniqOutlined, techniqNormal, geistSans, geistMono } from "../styles/fonts";
import "./globals.css";

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
        className={`${geistSans.variable} ${geistMono.variable} ${techniqNormal.variable} ${techniqOutlined.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
