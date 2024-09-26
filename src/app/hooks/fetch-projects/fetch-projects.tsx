import type { fetchProject } from '@/app/models/fetch/fetch-project'
import { Card, CardContent } from '@/components'
import ErrorStatus from '@/components/status/error'
import LoadingSpin from '@/components/status/loading'
import WarnStatus from '@/components/status/warn'
import { CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { RepositoryLink } from '@/utils/repository-link'
import { Dot } from 'lucide-react'
import { GetProjects } from '../use-router'

export function FetchProjects() {
  const { getAllProjects } = GetProjects()
  const { data: projects, isLoading, error } = getAllProjects

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <LoadingSpin />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center ">
        <ErrorStatus message={'Algo deu errado'} />
      </div>
    )
  }

  if (!Array.isArray(projects)) {
    return (
      <div className="flex justify-center ">
        <WarnStatus message={'Nenhum Projeto Cadastrado'} />
      </div>
    )
  }

  return (
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
  )
}
