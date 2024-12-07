import Hero from "@/components/home/Hero";
import WhoWeAreSection from "@/components/home/WhoWeAreSection";
import WhatWeOfferSection from "@/components/home/WhatWeOfferSection";
import Clients from "@/components/home/Clients";
import Projects from "@/components/home/Projects";
import Testimonials from "@/components/home/Testimonials";
import NewsletterSubscription from "@/components/home/NewsletterSubscriptionSection";
import AdotLabsSection from "@/components/home/AdotLabsSection";


export default function Home() {
  return (
    <div className="min-h-screen font-ubuntuReg">
      <Hero />
      <WhoWeAreSection />
      <WhatWeOfferSection />
      <Clients />
      <Projects />
      <AdotLabsSection />
      <Testimonials />
      <NewsletterSubscription />
    </div>
  );
}
