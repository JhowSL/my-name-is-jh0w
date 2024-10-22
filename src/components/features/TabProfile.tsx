'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BioSection } from './CardBioSection'
import { ProjectsCard } from './CardProjects'
import { SkillsCard } from './CardSkills'

export default function TabsProfile() {
  return (
    <div className="flex mx-auto justify-center items-center">
      <Tabs defaultValue="projects" className="flex flex-col gap-1">
        <TabsList className="flex  ">
          <TabsTrigger value="projects" className="justify-end rounded-md">
            <span className="font-medium capitalize text-lg justify-start ">
              Projects
            </span>
          </TabsTrigger>
          <aside>
            <TabsTrigger value="about" className="justify-start rounded-md">
              <span className="font-medium capitalize justify-start text-lg">
                About
              </span>
            </TabsTrigger>
            <TabsTrigger value="skills" className="justify-center rounded-md">
              <span className="font-medium capitalize justify-start text-lg">
                Skills
              </span>
            </TabsTrigger>
          </aside>
        </TabsList>
        <section>
          <TabsContent value="projects">
            <ProjectsCard />
          </TabsContent>
          <TabsContent value="about">
            <BioSection />
          </TabsContent>
          <TabsContent value="skills">
            <SkillsCard />
          </TabsContent>
        </section>
      </Tabs>
    </div>
  )
}
