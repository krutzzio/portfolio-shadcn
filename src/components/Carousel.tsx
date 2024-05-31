import projects from "../lib/projects.json";

import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ProjectCard from "./ProjectCard"

export function ProjectsCarusel() {
    return (
        <Carousel opts={{
            loop: true,
        }} className="w-[80%] lg:w-[90%] m-auto">
            <CarouselContent>
                {
                    projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
