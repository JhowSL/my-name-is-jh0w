import { GetSkill } from '@/hooks/fetch'
import type { fetchSkill } from '@/models/fetch'
import React from 'react'
import { ContainerPage } from '../layout'
import { Card, CardContent } from '../ui'

export function SkillsCard(): JSX.Element {
  const { skills, loadingComponent, errorComponent, warnComponent } = GetSkill()
  if (loadingComponent) return loadingComponent
  if (errorComponent) return errorComponent
  if (warnComponent) return warnComponent
  return (
    <ContainerPage>
      <Card className="flex capitalize text-justify justify-center p-4 mx-1 my-1 gap-6 sm:max-w-xl ">
        <CardContent className="flex-row">
          <div className="flex flex-wrap justify-center items-center mt-2 lg:mt-2 gap-6">
            {skills
              .toSorted((firstLetter, lastLetter) =>
                firstLetter.name.localeCompare(lastLetter.name)
              )
              .map((skill: fetchSkill) => (
                <span
                  key={skill.id}
                  className="flex items-center justify-center"
                >
                  <span className="capitalize font-normal text-[14px] lg:text-base">
                    {skill.name}
                  </span>
                </span>
              ))}
          </div>
        </CardContent>
      </Card>
    </ContainerPage>
  )
}
