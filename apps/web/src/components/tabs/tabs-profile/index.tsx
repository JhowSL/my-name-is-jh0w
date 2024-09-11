"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/tabs";
import { BioSection, ProjectsCard } from "../../card";

export default function TabsProfile() {
  return (
    <div className="mx-auto mt-4 justify-center items-center">
      <Tabs defaultValue="about" className="grid">
        <TabsList className="grid-cols-3">
          <TabsTrigger value="about">
            <span className="card-title justify-center md:h4 lg:h3 xl:h2 2xl:h1">
              About
            </span>
          </TabsTrigger>
          <TabsTrigger value="skills">
            <span className="card-title justify-center md:h4 lg:h3 xl:h2 2xl:h1">
              Skills
            </span>
          </TabsTrigger>
          <TabsTrigger value="projects">
            <span className="card-title justify-center md:h4 lg:h3 xl:h2 2xl:h1">
              Projects
            </span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="about">
          <BioSection />
        </TabsContent>
        <TabsContent value="skills">
          <h1>Skills</h1>
        </TabsContent>
        <TabsContent value="projects">
          <ProjectsCard />
        </TabsContent>
      </Tabs>
    </div>
  );
}
