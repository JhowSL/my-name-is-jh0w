"use client";

import { Card, CardContent } from "@repo/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@repo/ui/carousel";
import { GetProjects } from "../../../hooks/use-router";
import type { ProjectModel } from "../../../models/projects";
import { RepositoryLink } from "../../../utils/repository-link";

export function ProjectsCard(): JSX.Element {
  const { getAllProjects } = GetProjects();
  const { data: projects, isLoading, error } = getAllProjects;
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading projects</div>;
  }

  if (!projects) {
    return <div>No projects available</div>;
  }
  if (!Array.isArray(projects)) {
    return <div>Unexpected data format</div>;
  }
  return (
    <Carousel className="w-full max-w-xs sm:max-w-sm    ">
      <CarouselContent>
        {projects.map((project: ProjectModel) => (
          <CarouselItem key={project.id}>
            <div className="p-1">
              <Card>
                <CardContent className="grid aspect-square xl:aspect-video items-center justify-center p-6">
                  <span className="text-4xl font-semibold grid items-center justify-center">
                    {project.title}
                  </span>
                  <span className="card-description text-center justify-center md:h4 lg:h3 xl:h2 2xl:h1">
                    {project.description}
                  </span>
                  <span className="grid items-center justify-center">
                    <RepositoryLink
                      url={project.repository}
                      repoName={project.title}
                    />
                  </span>
                  <>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech.id}
                        className="grid items-center justify-around"
                      >
                        {tech.skill.name}
                      </span>
                    ))}
                  </>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="scale-[3.00] " />
      <CarouselNext className="scale-[3.00]" />
    </Carousel>
  );
}
