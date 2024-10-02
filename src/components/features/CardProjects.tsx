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
            <div className="py-4 lg:p-1">
              <Card className="flex items-center justify-center">
                <CardContent className="flex flex-col gap-2 justify-center items-center">
                  <span className="flex justify-center font-bold capitalize text-xl mt-1">
                    {project.title}
                  </span>

                  <span className="flex justify-center font-semibold capitalize text-lg">
                    {project.description}
                  </span>

                  <div>
                    <span className="flex justify-center my-2">
                      <RepositoryLink
                        url={project.repository}
                        repoName={project.title}
                      />
                    </span>
                    <div className="flex flex-row justify-center">
                      {project.technologies
                        .toSorted((a, b) =>
                          a.skill.name.localeCompare(b.skill.name)
                        )
                        .map((tech, index, array) => (
                          <h5
                            className="font-medium flex items-center"
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
            <CarouselPrevious className="flex ml-4 scale-90" />
            <CarouselNext className="flex mr-4 scale-90" />
          </>
        )}
      </aside>
    </Carousel>
  )
}
