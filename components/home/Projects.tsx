import GradientWord from "../ui/GradientWord";
import { Tabs } from "../ui/Tabs";
import {
  webProjects,
  appProjects,
  softwareProjects,
  designProjects,
  otherProjects,
} from "@/data/projects";
import { ProjectsImageGrid } from "../ProjectsImageGrid";

const ProjectsTabContent = ({ projects }: { projects: any[] }) => (
  <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-primary to-secondary">
    {projects.length === 0 && (
      <div className="text-center text-lg text-white p-8">No projects found</div> // Render a message if no projects are found
    )}

    <ProjectsImageGrid projects={projects} />
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
    <div className="mt-20 mx-16 sm:mx-20 flex flex-col items-center">
      <GradientWord word="Projects" />
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-10 mb-40">
        <Tabs tabs={tabs} tabClassName="text-primary hover:text-red-500" />
      </div>
    </div>
  );
};

export default Projects;
