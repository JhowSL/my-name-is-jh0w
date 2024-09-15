'use client'

import type { ReactElement } from 'react'

export function ContainerHeader({
  children,
}: Readonly<{ children: ReactElement }>) {
  return (
    <header className="max-h-screen px-6 border-t-[1px] rounded-lg border border-border bg-slate-500 ">
      {children}
    </header>
  )
}
