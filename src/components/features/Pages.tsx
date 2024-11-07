'use client'
import { BioSection, Profile, ProjectsCard, SkillsCard } from '.'
import ScrollToTopButton from '../ui/ButtonScrollToTop'

export default function Pages() {
  return (
    <>
      <section id="profile">
        <Profile />
      </section>
      <section id="biography">
        <BioSection />
      </section>
      <section id="skills">
        <SkillsCard />
      </section>
      <section id="projects">
        <ProjectsCard />
      </section>
      <ScrollToTopButton />
    </>
  )
}
