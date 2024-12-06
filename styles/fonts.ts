// styles/fonts.ts
import localFont from "next/font/local";

export const techniqNormal = localFont({
  src: "../app/fonts/techniqu.ttf",
  variable: "--font-techniq-u",
  weight: "100 900",
});

export const techniqOutlined = localFont({
  src: "../app/fonts/techniqo.ttf",
  variable: "--font-techniq-o",
  weight: "100 900",
});

export const ubuntuReg = localFont({
  src: "../app/fonts/Ubuntu-R.ttf",
  variable: "--font-ubuntu-r",
  weight: "100 900",
});

export const ubuntuBold = localFont({
  src: "../app/fonts/Ubuntu-B.ttf",
  variable: "--font-ubuntu-b",
  weight: "100 900",
});

export const manropeReg = localFont({
  src: "../app/fonts/manrope-regular.otf",
  variable: "--font-monrope-r",
  weight: "100 900",
});

export const manropeThin = localFont({
  src: "../app/fonts/manrope-thin.otf",
  variable: "--font-manrope-t",
  weight: "100 900",
});
