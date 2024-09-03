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
import { CardContainer } from "../../containter";

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
    <CardContainer>
      <div className="grid items-center justify-center">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {projects.map((project: ProjectModel) => (
              <CarouselItem key={project.id}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6 flex-col">
                      <span>{project.title}</span>
                      <span>{project.description}</span>
                      <span>
                        <RepositoryLink
                          url={project.repository}
                          repoName={project.title}
                        />
                      </span>
                      <div className="flex-col">
                        {project.technologies.map((tech) => (
                          <span key={tech.id} className="flex">
                            {tech.skill.name}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </CardContainer>
  );
}
