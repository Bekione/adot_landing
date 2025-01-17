"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { labProjects } from "@/data/projects";
import GradientWord from "../ui/GradientWord";
import Button from "../ui/Button";
import { Noise } from "../ui/WobbleCard";
import cloudinaryLoader, { cloudinaryBlurPlaceholder } from "@/lib/image-loader";

export default function FeaturedProjects() {
  return (
    <section className="py-10 bg-secondary relative overflow-hidden">
      <Noise />
      <motion.div
        className="container mx-auto px-4 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GradientWord word="Projects We're Working On" size="sm" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:px-auto md:w-11/12 lg:w-10/12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {labProjects.map((project, index) => (
            <motion.div
              key={project.name}
              className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full group z-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.4 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden">
                <Image
                  loader={cloudinaryLoader}
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={250}
                  placeholder="blur"
                  blurDataURL={cloudinaryBlurPlaceholder(project.image)}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-ubuntuBold mb-2 text-primary">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {project.description}
                </p>
                {/* Button at the Bottom */}
                <div className="mt-auto">
                  <Button text="Learn More" to="#" className="!px-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
