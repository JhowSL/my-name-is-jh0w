import type * as React from 'react'

import { Dialog } from '@/components/ui/dialog'

interface DialogContainerProps {
  children: React.ReactNode
  open: boolean
  onOpenChange: (isOpen: boolean) => void
}

export function DialogContainer(
  props: Readonly<DialogContainerProps>
): JSX.Element {
  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      {props.children}
    </Dialog>
  )
}
