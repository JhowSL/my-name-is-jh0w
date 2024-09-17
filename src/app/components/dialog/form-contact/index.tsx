import { Button } from '@/components/ui/button'
import {
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
import { SendMessaTroughForm } from '../../button/send-message-button'
import { DialogContainer } from '../../container'
export function ContactForm() {
  return (
    <DialogContainer>
      <DialogTrigger asChild>
        <div className="grid">
          <SendMessaTroughForm text={'Message'} />
        </div>
      </DialogTrigger>
      <DialogContent className="grid max-w-[350px]">
        <DialogHeader>
          <DialogTitle>Lorem ipsum dolor</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Your Name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              E-mail
            </Label>
            <Input
              id="email"
              defaultValue="youremail@example.com"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="message" className="text-right">
              Message
            </Label>
            <Textarea id="message" className="col-span-3" />
          </div>
        </div>

        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </DialogContainer>
  )
}
