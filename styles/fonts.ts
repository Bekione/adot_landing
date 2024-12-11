import localFont from "next/font/local";

export const openSansVar = localFont({
  src: "../app/fonts/OpenSans-Variable.woff2",
  variable: "--font-openSans-v",
  weight: "100 900", // Variable font
});

export const ubuntuReg = localFont({
  src: "../app/fonts/Ubuntu-R.woff2",
  variable: "--font-ubuntu-r",
  weight: "400", // Regular weight
});

export const ubuntuBold = localFont({
  src: "../app/fonts/Ubuntu-B.woff2",
  variable: "--font-ubuntu-b",
  weight: "700", // Bold weight
});
