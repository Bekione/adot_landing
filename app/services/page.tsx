import { createMetadata } from "@/lib/create-metadata";
import GradientHeader from "@/components/GradientHeader";
import CTABlock from "@/components/ui/CTABlock";
import { services } from "@/data/serviceOffers";
import Button from "@/components/ui/Button";
import MotionWrapper from "@/components/MotionWrapper";
import { iconMap } from "@/lib/icon-map";

export const metadata = createMetadata({
  title: "Our Services",
  description: "Explore the range of services Adot Technologies offers to elevate your business.",
  path: "/services",
  image: "/images/og-banners/og-service.jpg",
});

export default function ServicesOverview() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Page Header */}
      <GradientHeader
        title="Our Services"
        subtitle="Empowering your digital journey with cutting-edge solutions"
      />

      {/* Services Grid */}
      <main className="py-16 md:w-11/12 lg:w-10/12 mx-6 md:mx-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];

              return (
                <MotionWrapper
                  key={service.title}
                  className="relative group overflow-hidden rounded-3xl shadow-xl bg-white border border-gray-200 transition-transform duration-500 hover:scale-105"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2, // Stagger animation based on index
                  }}
                >
                  {/* Circular Background Hover Effect */}
                  <div className="absolute w-2 h-2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-[100] rounded-full transition-all duration-1000 ease-out origin-center" />

                  {/* Service Content */}
                  <div className="relative z-10 p-8">
                    {/* Icon */}
                    <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#f2ebe3] text-primary transition-all duration-500">
                      <IconComponent className="w-8 h-8" />
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold font-ubuntuBold mb-4 text-primary">
                      {service.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 group-hover:text-white leading-relaxed mb-6 transition-colors duration-500">
                      {service.description}
                    </p>

                    {/* Button */}
                    <Button text="Learn More" to={service.link} />
                  </div>
                </MotionWrapper>
              );
            })}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <CTABlock
        title="Ready to Start Your Project?"
        description="Let's discuss how we can help bring your ideas to life."
        linkText="Contact Us"
        link="/contact"
      />
    </div>
  );
}
