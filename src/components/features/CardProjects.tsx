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
import { ContainerPage } from '../layout'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui'

export function ProjectsCard(): JSX.Element {
  const { projects, loadingComponent, errorComponent, warnComponent } =
    GetProjects()
  if (loadingComponent) return loadingComponent
  if (errorComponent) return errorComponent
  if (warnComponent) return warnComponent

  return (
    <ContainerPage>
      <Carousel className="flex w-screen max-w-xs lg:max-w-lg">
        <CarouselContent>
          {projects.map((project: fetchProject) => (
            <CarouselItem key={project.id}>
              <div className="py-4 lg:p-1">
                <Card className="flex flex-col h-[50vh] lg:h-[80vh] max-h-screen items-center justify-center gap-2">
                  <CardHeader className="flex justify-center gap-2 lg:gap-4">
                    <CardTitle className="flex justify-center">
                      <span className=" font-bold capitalize text-xl">
                        {project.title}
                      </span>
                    </CardTitle>
                    <CardDescription className="flex justify-center text-center gap-2 lg:gap-4">
                      <span className="font-semibold capitalize text-base">
                        {project.description}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center my-">
                    <RepositoryLink
                      url={project.repository}
                      repoName={project.title}
                    />
                  </CardContent>
                  <CardFooter className="flex flex-wrap justify-center gap-2 lg:gap-4">
                    {project.technologies
                      .toSorted((firstLetter, lastLetter) =>
                        firstLetter.skill.name.localeCompare(
                          lastLetter.skill.name
                        )
                      )
                      .map((tech, qtdTech, totalTech) => (
                        <span
                          className="font-medium flex items-center"
                          key={tech.id}
                        >
                          <span className="flex capitalize font-serif text-[10px] sm:text-xs">
                            {tech.skill.name}
                          </span>
                          {qtdTech < totalTech.length - 1 && (
                            <Dot className="size-2 mx-1" />
                          )}
                        </span>
                      ))}
                  </CardFooter>
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
    </ContainerPage>
  )
}
