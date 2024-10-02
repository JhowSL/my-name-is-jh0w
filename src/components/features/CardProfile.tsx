import { env } from '@/utils/env'
import React from 'react'
import {
  AvatarProfile,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  GithubButton,
  LinkedInButton,
} from '../ui'
import { ContactForm } from './DialogContact'
import TabsProfile from './TabProfile'

export function Profile() {
  return (
    <Card className="h-screen flex flex-col items-center justify-center gap-2 2xl:gap-8 border-none">
      <CardHeader className="profile_header">
        <>
          <CardTitle>
            <AvatarProfile
              src={`${env.NEXT_PUBLIC_PROFILE_IMAGE_URL}`}
              alt={'jh0w'}
            />
          </CardTitle>
          <CardDescription className="profile_name">
            <span className="font-bold text-xl lg:text-lg 2xl:text-2xl">
              Hello, My Name Is Jh0w!
            </span>
            <span className="font-semibold text-lg lg:text-base 2xl:text-xl">
              FullStack Developer
            </span>
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
      <section>
        <TabsProfile />
      </section>
    </Card>
  )
}
