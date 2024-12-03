import { FocusCards } from "./ui/FocusCards";

export function ProjectsImageGrid({ projects }: { projects: any[] }) {
  return <FocusCards cards={projects} />;
}
