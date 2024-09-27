import { TriangleAlert } from 'lucide-react'
interface WarnStatusProps {
  message: string
}
export default function WarnStatus(props: Readonly<WarnStatusProps>) {
  return (
    <span className="flex justify-center items-center">
      <TriangleAlert aria-hidden="true" className="text-yellow-400" />
      <p className="text-yellow-400 text-md capitalize ml-1">{props.message}</p>
    </span>
  )
}
