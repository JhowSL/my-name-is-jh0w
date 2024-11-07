import type { ReactElement, ReactNode } from 'react'
import { Card } from '../ui'

export function ContainerPage({
  children,
}: Readonly<{ children: ReactElement | ReactNode }>) {
  return (
    <Card className="h-screen flex flex-col items-center justify-center gap-2 2xl:gap-8 border-none">
      {children}
    </Card>
  )
}
