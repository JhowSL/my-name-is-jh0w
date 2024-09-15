'use client'

import { Card, CardContent } from '@repo/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@repo/ui/carousel'
import { GetProjects } from '../../../hooks/use-router'
import type { ProjectModel } from '../../../models/projects'
import { RepositoryLink } from '../../../utils/repository-link'

export function ProjectsCard(): JSX.Element {
  const { getAllProjects } = GetProjects()
  const { data: projects, isLoading, error } = getAllProjects
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading projects</div>
  }

  if (!projects) {
    return <div>No projects available</div>
  }
  if (!Array.isArray(projects)) {
    return <div>Unexpected data format</div>
  }
  return (
    <Carousel className="grid w-screen max-w-xs sm:max-w-sm">
      <CarouselContent>
        {projects.map((project: ProjectModel) => (
          <CarouselItem key={project.id}>
            <div className="p-1">
              <Card className="flex items-center justify-center text-xs">
                <CardContent className="flex flex-col gap-6 justify-center">
                  <h1 className="font-medium h1">
                    <span className="capitalize">{project.title}</span>
                  </h1>
                  <h3 className="font-medium h3">
                    <span className="capitalize">{project.description}</span>
                  </h3>

                  <span className="grid items-center justify-center">
                    <RepositoryLink
                      url={project.repository}
                      repoName={project.title}
                    />
                  </span>
                  <>
                    {project.technologies.map(tech => (
                      <h5
                        className="font-medium h5 flex items-center justify-around"
                        key={tech.id}
                      >
                        <span className="capitalize">{tech.skill.name}</span>
                      </h5>
                    ))}
                  </>
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
