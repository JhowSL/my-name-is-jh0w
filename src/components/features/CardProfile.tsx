import { env } from '@/utils/env'
import React from 'react'
import {
  AvatarProfile,
  CardDescription,
  CardHeader,
  CardTitle,
  GithubButton,
  LinkedInButton,
} from '../ui'
import { CardContainer } from './CardContainer'
import { ContactForm } from './DialogContact'
import TabsProfile from './TabProfile'

export function Profile() {
  return (
    <CardContainer>
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
    </CardContainer>
  )
}
