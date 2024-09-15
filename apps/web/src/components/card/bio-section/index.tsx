import React from 'react'

import { Card } from '@repo/ui/card'
import { ScrollArea } from '@repo/ui/scroll-area'
import { Typography } from '../../typography'

export function BioSection(): JSX.Element {
  const text = Typography()
  return (
    <Card className="grid my-2 sm:my-0 md:my-2 lg:my-2 xl:my-2 2xl:my-6">
      <ScrollArea className="text-justify card-description md:h4 lg:h3 xl:h2 2xl:h1 p-6 h-[30vh] sm:p-4 sm:h-[12vh] md:p-4 md-[14vh] lg:p-6 lg:h-[16vh] xl:p-8 xl:h-[16vh] 2xl:p-10 2xl:h-[18vw]">
        {text.BioSection}
      </ScrollArea>
    </Card>
  )
}
