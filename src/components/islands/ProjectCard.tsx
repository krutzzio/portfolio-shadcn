import type { Project } from '@/lib/utils';
import { Card, CardContent } from "@/components/ui/card"
import {
    CarouselItem,
} from '../ui/carousel';
import { Badge } from "@/components/ui/badge"
import { Button } from '../ui/button';


export default function ProjectCard({ project }: Project) {
    const { name, desc, techs, img, url } = project;

    return (

        <CarouselItem>
            <Card className='border-0 shadow-transparent border-foreground lg:border-2 lg:min-h-[18rem]'>
                <CardContent className="p-0 lg:p-6">
                    <section className="flex flex-col justify-between relative">
                        <h1 className="font-medium lg:text-[4rem] leading-[1em] mb-8 lg:mb-4 text-principal">{name}</h1>
                        <article className="h-full flex flex-col-reverse gap-4 justify-between
                            lg:flex-row">
                            <div className='flex flex-col lg:justify-center gap-4 lg:w-[60%]'>
                                <p className="text-[0.65em] leading-[1em] lg:w-[75%] lg:m-auto
                                    sm:text-[0.35em]
                                    md:text-[0.3em] 
                                    lg:text-[0.25em] 
                                    xl:text-[0.21em] 
                                    2xl:text-[0.20em]">{desc}</p>
                                <div className='w-[90%] lg:hidden m-auto flex flex-wrap justify-center gap-2'>
                                    {
                                        techs.map((tech, index) => <Badge className='border-foreground' key={index}>{tech}</Badge>)
                                    }
                                </div>
                                <a href={url} target='_blank' className='w-fit m-auto lg:hidden'>
                                    <Button className='bg-white flex items-center gap-4 font-bold text-black w-fit rounded-xl m-auto border-2 border-black dark:border-0'>
                                        <img src="\icons\github-mark.svg" className='w-6' alt="github icon" />
                                        Github
                                    </Button>
                                </a>

                            </div>
                            <img className=" min-w-[15rem] max-w-[45rem] h-full w-[75%] lg:w-[80%] m-auto"
                                src={`/images/${img}`}
                                alt="Gamba Landing"
                            />
                        </article>
                        <div className='w-fit hidden lg:flex m-auto justify-center  mt-6 flex-wrap gap-2 '>
                            {
                                techs.map((tech, index) => <Badge className='border-foreground ' key={index}>{tech}</Badge>)
                            }
                        </div>
                        <a href={url} target='_blank' className='w-fit m-auto'>
                            <Button className='bg-white hidden font-bold items-center gap-4 text-black w-fit rounded-xl m-auto border-2 lg:flex mt-4 border-black dark:border-0'>
                                <img src="\icons\github-mark.svg" className='w-6' alt="github icon" />
                                Github
                            </Button>
                        </a>
                    </section>
                </CardContent>
            </Card>
        </CarouselItem>


    )
}



