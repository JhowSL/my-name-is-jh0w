'use client'

import { DialogContainer } from '@/app/assets/container'
import { PostContact } from '@/app/hooks/use-router'
import { useDialogStore } from '@/app/states/dialog-open'
import { useFormStore } from '@/app/states/valid-form'
import { SendMessaTroughForm } from '@/components/button'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  type ContactFormModel,
  contactFormSchema,
} from '@/server/src/models/contact-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderCircle, X } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export function ContactForm() {
  const { register, handleSubmit, watch, formState, reset } =
    useForm<ContactFormModel>({
      resolver: zodResolver(contactFormSchema),
    })

  const setFormValid = useFormStore(state => state.setFormValid)
  const { isFormValid } = useFormStore(state => state)
  const setConfirmationDialogOpen = useDialogStore(
    state => state.setConfirmationDialogOpen
  )
  const setContactFormDialogOpen = useDialogStore(state => state.setDialogOpen)
  const isContactFormDialogOpen = useDialogStore(state => state.isDialogOpen)

  useEffect(() => {
    const subscription = watch(value => {
      const result = contactFormSchema.safeParse(value)
      setFormValid(result.success)
    })
    return () => subscription.unsubscribe()
  }, [watch, setFormValid])

  const { postContact, isLoading, error } = PostContact()

  if (error) {
    return <div>Error post contact</div>
  }

  function handleCreateContact(data: ContactFormModel) {
    const result = contactFormSchema.safeParse(data)
    if (!result.success) {
      console.error(result.error.errors)
      return
    }

    postContact(data, {
      onSuccess: response => {
        console.log('Contact created successfully:', response)
        setConfirmationDialogOpen(true)
      },
      onError: error => {
        console.error('Error creating contact:', error)
      },
    })
  }

  return (
    <DialogContainer
      open={isContactFormDialogOpen}
      onOpenChange={setContactFormDialogOpen}
    >
      <DialogTrigger asChild>
        <div className="grid">
          <SendMessaTroughForm
            text={'Message'}
            onClick={() => setContactFormDialogOpen(true)}
          />
        </div>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-6 ">
        <DialogHeader className="flex flex-col gap-3">
          <div className="flex items-center justify-end">
            <DialogClose />
          </div>

          <div className="flex items-center justify-center ">
            <DialogTitle className="capitalize card-title md:h4 lg:h3 xl:h2 2xl:h1">
              Fale Comigo!
            </DialogTitle>
          </div>

          <DialogDescription className="capitalize text-center text-sm card-description">
            Tem uma pergunta, proposta ou apenas quer trocar uma ideia? Estou
            disponível para conversarmos sobre projetos, colaborações ou o que
            mais você precisar.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(handleCreateContact)}
          className="flex-1 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="name"
                className="capitalize card-title text-center text-sm"
              >
                Nome ou Instituição que Representa
              </Label>
              <Input
                id="name"
                autoFocus
                placeholder="Your Name"
                className="bg-zinc-800 capitalize text-sm"
                {...register('name')}
              />
              {formState.errors.name && (
                <p className="text-red-400 text-sm">
                  {formState.errors.name.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="contactEmail"
                className="capitalize card-title text-center text-sm"
              >
                E-mail
              </Label>
              <Input
                id="contactEmail"
                placeholder="youremail@example.com"
                className="bg-zinc-800 text-sm"
                {...register('contactEmail')}
              />
              {formState.errors.contactEmail && (
                <p className="text-red-400 text-sm">
                  {formState.errors.contactEmail.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="message"
                className="capitalize card-title text-center text-sm"
              >
                Mensagem
              </Label>
              <Textarea
                id="message"
                placeholder="Insira no mínimo 10 caracteres e no máximo 500 caracteres!"
                className="bg-zinc-800 resize-none"
                {...register('message')}
              />
              {formState.errors.message && (
                <p className="text-red-400 text-sm">
                  {formState.errors.message.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center mt-3 gap-3">
            <DialogClose asChild>
              <Button type="button" className="flex-1" variant="secondary">
                Fechar
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="flex-1 valid:bg-green-900 valid:hover:bg-green-800"
              disabled={!isFormValid || isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <LoaderCircle aria-hidden="true" className="animate-spin" />
                  Enviando...
                </span>
              ) : (
                'Enviar'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
      <ConfirmationDialog resetForm={reset} />
    </DialogContainer>
  )
}

function ConfirmationDialog({
  resetForm,
}: Readonly<{ resetForm: () => void }>) {
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
          <DialogTitle>Mensagem enviada com sucesso!</DialogTitle>
        </DialogHeader>
        <DialogDescription>Deseja enviar uma nova mensagem?</DialogDescription>
        <DialogFooter>
          <Button onClick={handleNewMessage}>Sim</Button>
          <Button onClick={handleCloseAll} variant="secondary">
            Não
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
