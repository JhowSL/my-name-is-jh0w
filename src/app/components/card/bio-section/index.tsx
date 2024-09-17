import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'
import { Typography } from '../../typography'

export function BioSection(): JSX.Element {
  const text = Typography()
  return (
    <ScrollArea className="rounded-md border-none text-center card-description p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 h-[24vh] sm:h-[18vh] md:h-[14vh] lg:h-[21vh] xl:h-[20vh] overflow-auto shadow-lg">
      {text.BioSection}
    </ScrollArea>
  )
}
