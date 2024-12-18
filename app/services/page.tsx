import { createMetadata } from "@/lib/create-metadata";
import GradientHeader from "@/components/GradientHeader";
import CTABlock from "@/components/ui/CTABlock";
import ServicesOverviewClient from "@/components/services/ServicesOverviewClient";

export const metadata = createMetadata({
  title: "Our Services",
  description: "Explore the range of services Adot Technologies offers to elevate your business.",
  path: "/services",
  image: "/images/og-banners/og-service.jpg",
});

export default function ServicesOverview() {
  return (
    <div className="min-h-screen overflow-hidden">
      <GradientHeader
        title="Our Services"
        subtitle="Empowering your digital journey with cutting-edge solutions"
      />

      <main className="py-16 md:w-11/12 lg:w-10/12 mx-6 md:mx-auto">
        <div className="container mx-auto px-4">
          <ServicesOverviewClient />
        </div>
      </main>

      <CTABlock
        title="Ready to Start Your Project?"
        description="Let's discuss how we can help bring your ideas to life."
        linkText="Contact Us"
        link="/contact"
      />
    </div>
  );
}
