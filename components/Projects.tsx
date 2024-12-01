import GradientWord from "./ui/GradientWord"
import { HeroParallax } from "./ui/HeroParallax"
import { projects } from "@/data/projects"
import { Tabs } from "./ui/Tabs"
import Image from "next/image"
import { ProjectsImageGrid } from "./ProjectsImageGrid"

const Projects = () => {
    const tabs = [
        {
            title: "Websites",
            value: "websites",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Product Tab</p>
                    <ProjectsImageGrid />
                </div>
            ),
        },
        {
            title: "Apps",
            value: "apps",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Services tab</p>
                    <ProjectsImageGrid />
                </div>
            ),
        },
        {
            title: "Softwares",
            value: "softwares",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Playground tab</p>
                    <ProjectsImageGrid />
                </div>
            ),
        },
        {
            title: "Bots",
            value: "bots",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Content tab</p>
                    <ProjectsImageGrid />
                </div>
            ),
        },
        {
            title: "Designs",
            value: "designs",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Random tab</p>
                    <ProjectsImageGrid />
                </div>
            ),
        },
    ];

    return (
        <div className="mt-20 flex flex-col items-center bg-primary/40">
            <GradientWord word="Projects" />
            <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
                <Tabs tabs={tabs} />
            </div>
        </div>
    )
}

export default Projects
