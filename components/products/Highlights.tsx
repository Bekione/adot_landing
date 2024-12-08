"use client";

import { LayoutGrid } from "../ui/LayoutGrid";
import GradientWord from "../ui/GradientWord";

interface Highlight {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    className: string;
}

interface HighlightsProps {
    highlights: Highlight[];
}

export default function Highlights({ highlights }: HighlightsProps) {
    return (
        <div className="h-screen w-full pt-6 pb-8 bg-primary flex flex-col items-center">
            <GradientWord word="Highlights" type="secondary" />
            <LayoutGrid cards={highlights} />
        </div>
    );
}

