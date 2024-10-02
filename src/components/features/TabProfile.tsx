'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BioSection } from './CardBioSection'
import { ProjectsCard } from './CardProjects'

export default function TabsProfile() {
  return (
    <div className="mx-auto mt-1 justify-center items-center">
      <Tabs defaultValue="projects" className="flex flex-col gap-2">
        <TabsList className="flex card-title">
          <TabsTrigger value="projects" className="justify-end rounded-md">
            <span className="font-medium capitalize card-title justify-start md:h4 lg:h3 xl:h2 2xl:h1">
              Projects
            </span>
          </TabsTrigger>
          <aside>
            <TabsTrigger value="about" className="justify-start rounded-md">
              <span className="font-medium capitalize card-title justify-start md:h4 lg:h3 xl:h2 2xl:h1">
                About
              </span>
            </TabsTrigger>
            <TabsTrigger value="skills" className="justify-center rounded-md">
              <span className="font-medium capitalize card-title justify-start md:h4 lg:h3 xl:h2 2xl:h1">
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
            <h1>Skills</h1>
          </TabsContent>
        </section>
      </Tabs>
    </div>
  )
}
