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
    <Card className="h-screen p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 flex flex-col items-center justify-center gap-8 border-none shadow-lg max-w-screen-lg mx-auto rounded-lg">
      <CardHeader className="profile_header">
        <>
          <CardTitle>
            <AvatarProfile
              src={`${env.NEXT_PUBLIC_PROFILE_IMAGE_URL}`}
              alt={'jh0w'}
            />
          </CardTitle>
          <CardDescription className="profile_name">
            <span className="card-title md:h4 lg:h3 xl:h2 2xl:h1">
              Hello, My Name Is Jh0w!
            </span>
            <span className="card-description md:h4 lg:h3 xl:h2 2xl:h1">
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
