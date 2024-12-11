import type { Metadata } from "next";
import { openSansVar, ubuntuReg, ubuntuBold } from "@/styles/fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Adot Technologies",
  description:
    "Your one-stop solution for creative websites, custom software, and tailored services.",
  keywords:
    "creative websites, custom software, web development, software solutions, Adot Technologies",
  authors: [{ name: "Adot Technologies", url: "https://adot-technologies.com" }],
  openGraph: {
    title: "Adot Technologies",
    description:
      "Your one-stop solution for creative websites, custom software, and tailored services.",
    url: "https://adot-technologies.com",
    siteName: "Adot Technologies",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adot Technologies Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adot Technologies",
    description:
      "Your one-stop solution for creative websites, custom software, and tailored services.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://adot-technologies.com" />
      </head>
      <body
        className={`${openSansVar.variable} ${ubuntuReg.variable} ${ubuntuBold.variable} antialiased relative min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
        {/* No-JS Fallback */}
        <noscript>
          <p>Please enable JavaScript to view the full functionality of this site.</p>
        </noscript>
      </body>
    </html>
  );
}
