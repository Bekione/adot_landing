import HomeHero from "@/components/home/HomeHero";
import WhoWeAreSection from "@/components/home/WhoWeAreSection";
import WhatWeOfferSection from "@/components/home/WhatWeOfferSection";
import Clients from "@/components/home/Clients";
import Projects from "@/components/home/Projects";
import Testimonials from "@/components/home/Testimonials";
import NewsletterSubscription from "@/components/home/NewsletterSubscriptionSection";
import AdotLabsSection from "@/components/home/AdotLabsSection";


export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <HomeHero />
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
