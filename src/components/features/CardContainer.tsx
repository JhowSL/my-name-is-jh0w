'use client'

import { Card } from '@/components/ui/card'
import type { ReactNode } from 'react'

export function CardContainer({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Card className="h-screen p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 flex flex-col items-center justify-center gap-8 border-none shadow-lg max-w-screen-lg mx-auto rounded-lg">
      {children}
    </Card>
  )
}
