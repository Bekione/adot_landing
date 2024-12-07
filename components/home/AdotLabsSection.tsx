import React from "react";
import Link from "next/link";
import GradientWord from "../ui/GradientWord";

const AdotLabsSection = () => {
  return (
    <section className="bg-[#f4f4f4] py-16 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <GradientWord word="Adot Labs" />
        <p className="text-lg text-[#555] mb-6">
          At ADOT Labs, we support innovation through incubation and funding,
          helping startups and tech enthusiasts bring their ideas to life. Our
          goal is to foster creativity and drive forward-thinking solutions.
        </p>

        <Link
          href="/adot-labs"
          className="px-8 py-2 mt-4 rounded-md bg-primary text-white font-bold font-sans transition duration-200 hover:bg-white hover:text-primary border-2 border-transparent hover:border-primary"
        >
          Learn More About ADOT Labs
        </Link>
      </div>
    </section>
  );
};

export default AdotLabsSection;
