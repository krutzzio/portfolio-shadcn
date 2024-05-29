import * as React from "react"
import projects from "../lib/projects.json";

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ProjectCard from "./ProjectCard.astro"

export function CarouselDemo({ children }) {
    return (
        <Carousel opts={{
            loop: true,
        }} className="w-full max-w-xs">
            <CarouselContent>
                {projects.map((project, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    {children}
                                    <ProjectCard project={project} />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
