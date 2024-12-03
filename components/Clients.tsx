"use client";
import GradientWord from "./ui/GradientWord";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { clients } from "@/data/clients";

const Clients = () => {
    return (
        <div className="mt-20 flex flex-col items-center">
            <GradientWord word="Trusted By" />
            <InfiniteMovingCards
                items={clients}
                direction="left"
                speed="normal"
                pauseOnHover={true}
                className="mt-10 pb-12"
            />
        </div>
    );
}

export default Clients


