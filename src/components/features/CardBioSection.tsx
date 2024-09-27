import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'
import { Typography } from './Texts'

export function BioSection(): JSX.Element {
  const text = Typography()
  return (
    <ScrollArea className="capitalize text-center card-description flex items-center justify-center p-4 mx-1 my-1 gap-6 w-screen max-w-xs sm:max-w-xl rounded-md shadow-lg border">
      <div className="p-4">{text.BioSection}</div>
    </ScrollArea>
  )
}
