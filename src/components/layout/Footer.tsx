import { Info } from '@/utils/info'
import { Copyright, History } from 'lucide-react'
import { ContainerFooter } from './FooterContainer'

export function Footer() {
  return (
    <ContainerFooter>
      <div className="flex justify-center items-center gap-8">
        <span className="flex flex-row justify-center items-center space-x-2">
          <p className="flex justify-center items-center">
            Created by {<Copyright className="flex w-4 h-4 ml-1 mr-1" />}
            {Info().author}
          </p>

          <p className="flex justify-center items-center">
            <History className="flex w-4 h-4 ml-1 mr-1" /> {Info().version}
          </p>
        </span>
      </div>
    </ContainerFooter>
  )
}
