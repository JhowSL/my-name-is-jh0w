import { ShieldAlert } from 'lucide-react'
interface ErrorStatusProps {
  message: string
}
export default function ErrorStatus(props: Readonly<ErrorStatusProps>) {
  return (
    <span className="flex justify-center items-center">
      <ShieldAlert aria-hidden="true" className="text-red-400" />
      <p className="text-red-400 text-md capitalize ml-1">{props.message}</p>
    </span>
  )
}
