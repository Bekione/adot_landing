"use client"

import GradientWord from "../ui/GradientWord";
import { Tabs } from "../ui/Tabs";
import {
  webProjects,
  appProjects,
  softwareProjects,
  designProjects,
  otherProjects,
} from "@/data/projects";
import { FocusCards } from "../ui/FocusCards";
import { motion } from "framer-motion";

type Project = {
  title: string;
  src: string;
  liveLink?: string;
  githubLink?: string;
  description?: string;
};

const ProjectsTabContent = ({ projects }: { projects: Project[] }) => (
  <div className="w-full overflow-hidden relative h-full p-2 sm:p-4 md:p-8 rounded-2xl bg-gradient-to-br from-primary to-secondary">
    {projects.length === 0 && (
      <div className="text-center text-lg text-white p-8">
        No projects found
      </div>
    )}

    <FocusCards cards={projects} />
  </div>
);

const Projects = () => {
  const tabs = [
    {
      title: "Websites",
      value: "websites",
      content: <ProjectsTabContent projects={webProjects} />,
    },
    {
      title: "Apps",
      value: "apps",
      content: <ProjectsTabContent projects={appProjects} />,
    },
    {
      title: "Softwares",
      value: "softwares",
      content: <ProjectsTabContent projects={softwareProjects} />,
    },
    {
      title: "Designs",
      value: "designs",
      content: <ProjectsTabContent projects={designProjects} />,
    },
    {
      title: "Others",
      value: "others",
      content: <ProjectsTabContent projects={otherProjects} />,
    },
  ];

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mt-2 mx-8 sm:mx-20 flex flex-col items-center"
    >
      <GradientWord word="Projects" />
      <div className="h-[calc(16rem*4)] md:h-[calc(20rem*2)] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-4 mb-14">
        <Tabs tabs={tabs} tabClassName="" />
      </div>
    </motion.div>
  );
};

export default Projects;
