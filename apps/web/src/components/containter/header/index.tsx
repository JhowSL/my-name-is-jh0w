'use client'

import type { ReactElement } from 'react'

export function ContainerHeader({
  children,
}: Readonly<{ children: ReactElement }>) {
  return (
    <header className="container sticky grid mt-4 top-4 justify-center rounded-lg border bg-[#B3B3B3] w-[95vw] sm:grid sm:w-[92vw] lg:grid lg:w-[92vw] xl:grid xl:w-[94vw] 2xl:grid 2xl:w-[98vw] ">
      {children}
    </header>
  )
}
