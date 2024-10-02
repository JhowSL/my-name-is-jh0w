import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { GetProjects } from '@/hooks/fetch'
import { RepositoryLink } from '@/lib/repositoryLink'
import type { fetchProject } from '@/models/fetch'
import { Dot } from 'lucide-react'
import React from 'react'
import { Card, CardContent } from '../ui'

export function ProjectsCard(): JSX.Element {
  const { projects, loadingComponent, errorComponent, warnComponent } =
    GetProjects()
  if (loadingComponent) return loadingComponent
  if (errorComponent) return errorComponent
  if (warnComponent) return warnComponent

  return (
    <Carousel className="grid w-screen max-w-xs sm:max-w-sm">
      <CarouselContent>
        {projects.map((project: fetchProject) => (
          <CarouselItem key={project.id}>
            <div className="p-1">
              <Card className="flex items-center justify-center text-xs">
                <CardContent className="flex flex-col gap-6 justify-center items-center">
                  <span className="capitalize card-title md:h4 lg:h3 xl:h2 2xl:h1 ">
                    {project.title}
                  </span>

                  <span className="capitalize text-center text-sm card-description  ">
                    {project.description}
                  </span>

                  <div>
                    <span className="flex flex-col items-center justify-center my-1">
                      <RepositoryLink
                        url={project.repository}
                        repoName={project.title}
                      />
                    </span>
                    <div className="flex flex-row justify-around">
                      {project.technologies
                        .toSorted((a, b) =>
                          a.skill.name.localeCompare(b.skill.name)
                        )
                        .map((tech, index, array) => (
                          <h5
                            className="font-medium h5 flex items-center"
                            key={tech.id}
                          >
                            <span className="capitalize font-serif text-[10px] sm:text-xs">
                              {tech.skill.name}
                            </span>
                            {index < array.length - 1 && (
                              <Dot className="size-2 mx-1" />
                            )}
                          </h5>
                        ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <aside className="flex justify-center items-center">
        {projects.length > 1 && (
          <>
            <CarouselPrevious className="scale-[3.00]" />
            <CarouselNext className="scale-[3.00]" />
          </>
        )}
      </aside>
    </Carousel>
  )
}
