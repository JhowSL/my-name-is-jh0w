'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@repo/ui/tabs'
import { BioSection, ProjectsCard } from '../../card'

export default function TabsProfile() {
  return (
    <div className="mx-auto mt-1 justify-center items-center">
      <Tabs defaultValue="about" className="flex flex-col">
        <TabsList className="flex card-title">
          <aside>
            <TabsTrigger value="about" className="justify-start ">
              <span className="font-medium capitalize card-title justify-start md:h4 lg:h3 xl:h2 2xl:h1">
                About
              </span>
            </TabsTrigger>
            <TabsTrigger value="skills" className="justify-center">
              <span className="font-medium capitalize card-title justify-start md:h4 lg:h3 xl:h2 2xl:h1">
                Skills
              </span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="justify-end">
              <span className="font-medium capitalize card-title justify-start md:h4 lg:h3 xl:h2 2xl:h1">
                Projects
              </span>
            </TabsTrigger>
          </aside>
        </TabsList>

        <section>
          <TabsContent value="about">
            <BioSection />
          </TabsContent>
          <TabsContent value="skills">
            <h1>Skills</h1>
          </TabsContent>
          <TabsContent value="projects">
            <ProjectsCard />
          </TabsContent>
        </section>
      </Tabs>
    </div>
  )
}
