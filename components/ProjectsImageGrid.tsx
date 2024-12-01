import { FocusCards } from "./ui/FocusCards";

export function ProjectsImageGrid() {
    const cards = [
        {
            title: "Forest Adventure",
            src: "/images/project3.png",
        },
        {
            title: "Valley of life",
            src: "/images/project3.png",
        },
        {
            title: "Sala behta hi jayega",
            src: "/images/project3.png",
        },
        {
            title: "Camping is for pros",
            src: "/images/project3.png",
        },
        {
            title: "The road not taken",
            src: "/images/project3.png",
        },
        {
            title: "The First Rule",
            src: "/images/project3.png",
        },
    ];

    return <FocusCards cards={cards} />;
}
