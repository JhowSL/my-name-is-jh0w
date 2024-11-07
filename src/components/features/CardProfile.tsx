import { env } from '@/utils/env'
import React from 'react'
import { ContainerPage } from '../layout'
import {
  AvatarProfile,
  CardDescription,
  CardHeader,
  CardTitle,
  GithubButton,
  LinkedInButton,
} from '../ui'
import { ContactForm } from './DialogContact'

export function Profile() {
  return (
    <ContainerPage>
      <CardHeader className="profile_header">
        <>
          <CardTitle className="profile_name">
            <span className="font-bold text-xl lg:text-lg 2xl:text-2xl">
              Hello, My Name Is Jh0w!
            </span>
            <span className="font-semibold text-lg lg:text-base 2xl:text-xl">
              FullStack Developer
            </span>
          </CardTitle>
          <CardDescription>
            <AvatarProfile
              src={`${env.NEXT_PUBLIC_PROFILE_IMAGE_URL}`}
              alt={'jh0w'}
            />
          </CardDescription>
        </>
      </CardHeader>
      <aside className="social-links">
        <GithubButton
          href={`${env.NEXT_PUBLIC_GITHUB_PROFILE_URL}`}
          text={'Github'}
        />
        <LinkedInButton
          href={`${env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL}`}
          text={'LinkedIn'}
        />
        <ContactForm />
      </aside>
    </ContainerPage>
  )
}
