'use client'

import { FetchProjects } from '@/app/hooks/fetch-projects/fetch-projects'
import { GetProjects } from '@/app/hooks/use-router'
import WarnStatus from '@/components/status/warn'
import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function ProjectsCard(): JSX.Element {
  const { getAllProjects } = GetProjects()
  const { data: projects } = getAllProjects

  if (!Array.isArray(projects)) {
    return (
      <div className="flex justify-center ">
        <WarnStatus message={'Nenhum Projeto Cadastrado'} />
      </div>
    )
  }

  return (
    <Carousel className="grid w-screen max-w-xs sm:max-w-sm">
      <FetchProjects />
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
