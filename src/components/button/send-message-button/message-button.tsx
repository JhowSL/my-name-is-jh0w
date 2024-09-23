import { Button } from '@/components/ui/button'

interface ProfileButtonProps {
  text: string
  onClick: () => void
}

export function SendMessaTroughForm(
  props: Readonly<ProfileButtonProps>
): JSX.Element {
  return (
    <Button className="text-white bg-green-800 hover:bg-green-800/90 focus:ring-4 focus:outline-none focus:ring-green-800/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-green-900/30 me-2 mb-2">
      <svg
        className="w-5 h-5 me-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="#ffff"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M22 2L2 8.66667L11.5833 12.4167M22 2L15.3333 22L11.5833 12.4167M22 2L11.5833 12.4167"
          clipRule="evenodd"
        />
      </svg>
      {props.text}
    </Button>
  )
}
