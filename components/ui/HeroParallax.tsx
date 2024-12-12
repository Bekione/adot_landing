"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  projects,
}: {
  projects: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 800]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -800]),
    springConfig
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [-200, 0]),
    springConfig
  );

  return (
    <div ref={ref} className="min-h-screen overflow-hidden relative bg-gray-50">
      {/* Grid Section */}
      <motion.div
        style={{
          translateY,
        }}
        className="py-10 px-4 space-y-10 max-w-7xl mx-auto"
      >
        {/* Row 1 */}
        <motion.div
          className="flex space-x-6"
          style={{
            x: translateX,
          }}
        >
          {projects.slice(0, 5).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div
          className="flex space-x-6"
          style={{
            x: translateXReverse,
          }}
        >
          {projects.slice(5, 10).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </motion.div>

      {/* Header Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Build, Innovate, Inspire
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Creating exceptional web experiences with cutting-edge technology.
        </p>
      </div>
    </div>
  );
};

export const ProjectCard = ({
  project,
}: {
  project: {
    title: string;
    link: string;
    thumbnail: string;
  };
}) => {
  return (
    <motion.div
      className="relative group cursor-pointer shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
      whileHover={{
        scale: 1.05,
      }}
    >
      <Link href={project.link} target="_blank">
        <Image
          src={project.thumbnail}
          height={600}
          width={800}
          className="rounded-lg object-cover w-64 h-40 md:h-48 lg:h-56"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <h2 className="text-white font-bold text-lg md:text-xl">
            {project.title}
          </h2>
        </div>
      </Link>
    </motion.div>
  );
};
