import Hero from "@/components/Hero";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import { BentoGridDemo } from "@/components/BentoDemo";
import WhatWeOfferSection from "@/components/WhatWeOfferSection";
import Clients from "@/components/Clients";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-manrope-reg)]">
      <Hero />
      <WhoWeAreSection />
      <WhatWeOfferSection />
      <Clients />
      <Projects />
      
      <div className="h-screen w-full border">
        <h2>Fullscreen Content</h2>
      </div>
    </div>
  );
}
