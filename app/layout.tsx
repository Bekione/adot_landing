import { openSansVar, ubuntuReg, ubuntuBold } from "@/styles/fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { createMetadata } from "@/lib/create-metadata";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
export const metadata = createMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${openSansVar.variable} ${ubuntuReg.variable} ${ubuntuBold.variable} antialiased relative min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
        <Analytics/> 
        <SpeedInsights/>
        {/* No-JS Fallback */}
        <noscript>
          <p>Please enable JavaScript to view the full functionality of this site.</p>
        </noscript>
      </body>
    </html>
  );
}
