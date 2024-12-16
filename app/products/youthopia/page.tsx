import { createMetadata } from "@/lib/create-metadata";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CTABlock from "@/components/ui/CTABlock";
import Highlights from "@/components/products/Highlights";
import { youthopiaHighlights } from "@/data/highlights";
import WhyChoose from "@/components/products/WhyChoose";
import { whyChooseYouthopia } from "@/data/whyChoose";
import MotionWrapper from "@/components/MotionWrapper";

export const metadata = createMetadata({
  title: "Youthopia",
  description: "Youthopia is a children’s media platform designed for both education and entertainment.",
  path: "/youthopia",
  image: "/images/og-banners/youthopia.jpg",
});

export default function Youthopia() {
  return (
    <section className="min-h-screen overflow-hidden">
      <Hero
        title="Youthopia"
        description="Learn, Play, and Grow Together – A Social Learning Platform for Children."
        backgroundImage="/images/products/youthopia/youthopia-kid.jpeg"
        ctaText="Explore Now"
        ctaLink="https://youthopia.vercel.app/"
      />
      <About
        title="About Youthopia"
        description="Youthopia is a children’s media platform designed for both education and entertainment. It offers interactive courses, a social community for learning, and carefully crafted content to engage young minds in an immersive experience."
        images={[
          "/images/products/youthopia/youthopia-snap-1.png",
          "/images/products/youthopia/youthopia-snap-2.png",
          "/images/products/youthopia/youthopia-snap-3.png",
        ]}
      />
      <div className="flex flex-col items-center gap-6 mt-6 mb-14 mx-auto">
        <MotionWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <Highlights highlights={youthopiaHighlights} />
        </MotionWrapper>

        <MotionWrapper
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className=""
        >
          <WhyChoose title="Why Choose Youthopia" cards={whyChooseYouthopia} />
        </MotionWrapper>
      </div>

      <CTABlock
        title="Let Your Child Explore a World of Learning and Fun!"
        linkText="Get Started Today"
        link="https://youthopia.vercel.app/"
        target="_blank"
        type="secondary"
      />
    </section>
  );
}
