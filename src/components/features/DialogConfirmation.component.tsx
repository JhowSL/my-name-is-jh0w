'use client'
import { useDialogStore } from '@/utils/dialogOpenState'
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui'

interface DialogConfirmationProps {
  dialogTitleText: string
  dialogDescriptionText: string
  buttonAcceptText: string
  buttonCancelText: string
}

export function ConfirmationDialog({
  resetForm,
  dialogTitleText,
  dialogDescriptionText,
  buttonAcceptText,
  buttonCancelText,
}: Readonly<{ resetForm: () => void } & DialogConfirmationProps>) {
  const isConfirmationDialogOpen = useDialogStore(
    state => state.isConfirmationDialogOpen
  )
  const setConfirmationDialogOpen = useDialogStore(
    state => state.setConfirmationDialogOpen
  )
  const closeAllDialogs = useDialogStore(state => state.closeAllDialogs)

  function handleNewMessage() {
    resetForm()
    setConfirmationDialogOpen(false)
  }

  function handleCloseAll() {
    closeAllDialogs()
  }

  return (
    <Dialog
      open={isConfirmationDialogOpen}
      onOpenChange={setConfirmationDialogOpen}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialogTitleText}</DialogTitle>
        </DialogHeader>
        <DialogDescription>{dialogDescriptionText}</DialogDescription>

        <Button onClick={handleNewMessage}>{buttonAcceptText}</Button>
        <Button onClick={handleCloseAll} variant="secondary">
          {buttonCancelText}
        </Button>
      </DialogContent>
    </Dialog>
  )
}
