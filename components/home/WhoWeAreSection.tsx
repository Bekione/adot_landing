"use client";

import GradientWord from "../ui/GradientWord";
import { motion } from "framer-motion";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3dCard";
import Button from "../ui/Button";
import cloudinaryLoader, { cloudinaryBlurPlaceholder } from "@/lib/image-loader";

const WhoWeAreSection = () => {
  return (
    <section className="py-8 md:py-16 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:w-11/12 lg:w-10/12">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 mx-8 md:mx-0">
          {/* Card Section */}
          <motion.div
            className="w-full lg:w-2/5"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            <CardContainer>
              <CardBody className="bg-primary relative group/card w-full sm:w-[22rem] md:w-[25rem] h-auto aspect-[16/10] md:aspect-[16/12] rounded-xl mx-auto">
                <CardItem translateZ="75" className="w-full h-full flex">
                  <Image
                    loader={cloudinaryLoader}
                    src="/images/home/adot-office.png"
                    width={640}
                    height={480}
                    className="object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Adot office"
                    placeholder="blur"
                    blurDataURL={cloudinaryBlurPlaceholder(
                      "/images/home/adot-office.png"
                    )}
                    sizes="(max-width: 375px) 335px, (max-width: 640px) 375px, 640px"
                    quality={85}
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="w-full lg:w-3/5 lg:text-left"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.2,
            }}
          >
            <GradientWord word="Who We Are" />
            <p className="text-base sm:text-lg text-gray-600 mb-4 md:mb-6 text-justify leading-relaxed">
              At Adot Solution, we are on a mission to transform Ethiopia&apos;s
              tech landscape. Our vision is to become the leading innovator in
              the region, providing cutting-edge solutions that address local
              challenges while meeting global standards. Our goal is to empower
              businesses and individuals with technology that drives growth and
              fosters innovation.
            </p>
            <div className="flex justify-start">
              <Button 
                text="About Adot" 
                to="/about" 
                className="mt-2"
                aria-label="Discover more about Adot Technologies' mission and vision"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
