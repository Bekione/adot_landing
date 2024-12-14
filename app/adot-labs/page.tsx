import { createMetadata } from "@/lib/create-metadata";
import FeaturedProjects from "@/components/adot-labs/FeaturedProjects";
import FocusAreas from "@/components/adot-labs/FocusAreas";
import Internships from "@/components/adot-labs/Internships";
import TechTonicClub from "@/components/adot-labs/TechTonicClub";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CTABlock from "@/components/ui/CTABlock";
import MotionWrapper from "@/components/MotionWrapper";

export const metadata = createMetadata({
  title: "Adot Labs",
  description: "Where Innovation Meets Collaboration",
  path: "/adot-labs",
  image: "/images/og-banners/og-adot-labs.jpg",
});

const page = () => {

  return (
    <div className="min-h-screen">
      <MotionWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <Hero
          title="Adot Labs"
          description="Where Innovation Meets Collaboration"
          backgroundImage="/images/adot-labs/adot-lab.avif"
          ctaText="Get Involved"
          ctaLink="#get-involved"

        />
        <main>
          <About
            title="What is Adot Labs?"
            description={[
              "Adot Labs is where bold ideas come to life. As the innovation hub of Adot Technologies, we empower aspiring innovators, experiment with groundbreaking ideas, and develop impactful open-source projects. From internships to startup incubation, we're committed to fostering creativity and technical excellence.",
              "Our mission is to incubate ideas from youth and aspiring innovators, develop open-source projects, support initiatives like TechTonic Club, and provide opportunities through internships and mentorship.",
            ]}
            images={[
              "/images/adot-labs/adot-labs-team.avif",
              "/images/adot-labs/adot-labs-team-2.avif",
              "/images/adot-labs/adot-labs-team-3.avif",
            ]}
          />
          <FocusAreas />
          <FeaturedProjects />
          <Internships />
          <TechTonicClub />
          <CTABlock
            title="Let's Innovate Together"
            description="Whether you're a student, developer, or industry partner, there's a place for you at Adot Labs. Join us in shaping the future of technology and innovation."
            linkText="Collaborate with Us"
            link="/contact"
            className="mb-32"
            type="secondary"
          />
        </main>
      </MotionWrapper>
    </div>
  );
};

export default page;
