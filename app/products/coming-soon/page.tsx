import { createMetadata } from "@/lib/create-metadata";
import Hero from "@/components/Hero";
import MotionWrapper from "@/components/MotionWrapper";
import { WobbleCard } from "@/components/ui/WobbleCard";
import { Clock, Bell } from "lucide-react";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Coming Soon",
  description: "Exciting things are on the way at Adot Technologies. Stay tuned for updates!",
  path: "/coming-soon",
});

export default function ComingSoon() {
  return (
    <section className="flex flex-col items-center overflow-hidden">
      <Hero
        title="Commign Soon"
        description="Our team is hard at work developing an innovative new product that will redefine the way you interact with technology."
        backgroundImage="/images/products/coming-soon.avif"
        noButton
      />

      <WobbleCard
        allowScale={false}
        containerClassName=" w-10/12 max-w-2xl mx-auto my-6 bg-primary"
      >
        <MotionWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <Clock size={64} className="mx-auto mb-4 text-white" />
          <h2 className="text-3xl font-bold font-ubuntuBold text-center mb-4 text-white">Something Big is Coming</h2>
          <p className="mb-6 px-2 text-white/80 text-justify">
            Our team is hard at work developing an innovative new product that
            will redefine the way you interact with technology. Stay tuned for
            updates and be the first to experience what&apos;s next from Adot.
          </p>
          <Link href="/contact"
            className="px-8 py-2 rounded-md bg-primary text-white font-bold font-sans transition duration-200 hover:bg-white hover:text-primary border-2 border-transparent hover:border-primary flex items-center z-40 "
          >
            Get Notified <Bell size={16} className="ml-2" />
          </Link>
        </MotionWrapper>
      </WobbleCard>
    </section>
  );
}
