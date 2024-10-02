import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'
import { Typography } from './Texts'

export function BioSection(): JSX.Element {
  const text = Typography()
  return (
    <div className="flex capitalize text-justify justify-center p-4 mx-1 my-1 gap-6 sm:max-w-xl rounded-md border">
      <ScrollArea className="lg:p-4 font-normal text-base">
        {text.BioSection}
      </ScrollArea>
    </div>
  )
}
