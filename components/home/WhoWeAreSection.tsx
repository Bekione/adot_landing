"use client";

import GradientWord from "../ui/GradientWord";
import { motion } from "framer-motion";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from '../ui/3dCard'
import Button from "../ui/Button";
const WhoWeAreSection = () => {
  return (
    <section className="py-16 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:w-11/12 lg:w-10/12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="w-full lg:w-2/5"
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <CardContainer className="inter-var">
              <CardBody className="bg-primary relative group/card w-auto sm:w-[25rem] h-auto [aspect-ratio:16/14] rounded-xl border">
                <CardItem translateZ="75" className="w-full h-full flex">
                  <Image
                    src="/images/home/adot-office.png"
                    height="1000"
                    width="1000"
                    className="object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Adot office"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
          <motion.div
            className="w-full lg:w-3/5"
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.2,
            }}
          >
            <GradientWord word="Who We Are" />
            <p className="text-lg text-gray-600 mb-6 text-justify">
              At Adot Solution, we are on a mission to transform Ethiopia&apos;s
              tech landscape. Our vision is to become the leading innovator in
              the region, providing cutting-edge solutions that address local
              challenges while meeting global standards. Our goal is to empower
              businesses and individuals with technology that drives growth and
              fosters innovation.
            </p>
            <Button text="See more" to="/about" className="mt-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
