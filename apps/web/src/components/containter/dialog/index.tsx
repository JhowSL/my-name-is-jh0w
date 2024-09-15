import type * as React from 'react'

import { Dialog } from '@repo/ui/dialog'

interface DialogContainerProps {
  children: React.ReactNode
}
export function DialogContainer(
  props: Readonly<DialogContainerProps>
): JSX.Element {
  return <Dialog>{props.children}</Dialog>
}
