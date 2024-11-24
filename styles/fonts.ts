// styles/fonts.ts
import localFont from "next/font/local";

export const techniqOutlined = localFont({
  src: "../app/fonts/techniqo.ttf",
  variable: "--font-techniq-o",
  weight: "100 900",
});

export const techniqNormal = localFont({
  src: "../app/fonts/techniqu.ttf",
  variable: "--font-techniq-n",
  weight: "100 900",
});

export const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const geistMono = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
