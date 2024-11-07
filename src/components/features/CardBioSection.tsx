import React from 'react'
import { ContainerPage } from '../layout'
import { Typography } from './Texts'

export function BioSection(): JSX.Element {
  return (
    <ContainerPage>
      <div className="flex capitalize text-justify justify-center p-4 mx-1 my-1 gap-6 sm:max-w-4xl font-normal text-base ">
        {Typography().BioSection}
      </div>
    </ContainerPage>
  )
}
