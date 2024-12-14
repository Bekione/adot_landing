import Mission from "@/components/about-us/Mission";
import Vision from "@/components/about-us/Vision";
import MotionWrapper from "@/components/MotionWrapper";
import CoreValues from "@/components/about-us/CoreValues";
import OurStory from "@/components/about-us/OurStory";
import MeetTheTeam from "@/components/about-us/MeetTheTeam";
import WhyChoose from "@/components/products/WhyChoose";
import GradientWord from "@/components/ui/GradientWord";
import { WobbleCard } from "@/components/ui/WobbleCard";
import { whyChooseUs } from "@/data/whyChoose";
import { createMetadata } from "@/lib/create-metadata";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn more about Adot Technologies, our mission, vision, history and how we provide top-notch software solutions.",
  path: "/about",
  image: "/images/og-banners/og-about.jpg",
});

const page = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 pt-28 md:w-11/12 lg:w-10/12 mx-auto">
        <MotionWrapper
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-8 flex flex-col items-center"
        >
          <GradientWord word="About Us" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-6">
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full bg-primary min-h-[500px] lg:min-h-[300px]"
              className=""
            >
              <div className="max-w-2xl">
                <Mission />
              </div>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-secondary">
              <Vision />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#7d672d] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
              <CoreValues />
            </WobbleCard>
          </div>
          <OurStory />
          <MeetTheTeam />
          <WhyChoose title="Why Choose Us?" cards={whyChooseUs} />
        </MotionWrapper>
      </section>
    </div>
  );
};

export default page;
