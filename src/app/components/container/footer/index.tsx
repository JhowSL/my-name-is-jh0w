'use client'

import type { ReactElement } from 'react'

export function ContainerFooter({
  children,
}: Readonly<{ children: ReactElement }>) {
  return (
    <footer className="mt-2 max-h-screen gap-8 border-t-[1px] rounded-lg border border-border px-4 bg-slate-500">
      {children}
    </footer>
  )
}
