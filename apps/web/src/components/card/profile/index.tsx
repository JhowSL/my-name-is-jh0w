import { CardDescription, CardHeader, CardTitle } from "@repo/ui/card";
import { CardContainer } from "../../containter";

import React from "react";
import { env } from "../../../utils/env";
import AvatarProfile from "../../avatar";
import { GithubButton } from "../../button/profile-github-button";
import { LinkedInButton } from "../../button/profile-linkedin-button";
import { ContactForm } from "../../dialog";
import TabsProfile from "../../tabs/tabs-profile";

export default function Profile() {
  return (
    <CardContainer>
      <CardHeader className="profile_header">
        <>
          <CardTitle>
            <AvatarProfile
              src={`${env.NEXT_PUBLIC_PROFILE_IMAGE_URL}`}
              alt={"jh0w"}
            />
          </CardTitle>
          <CardDescription className="profile_name justify-center">
            <div className="card-title md:h4 lg:h3 xl:h2 2xl:h1">
              Hello, My Name Is Jh0w!
            </div>
            <p className="card-description md:h4 lg:h3 xl:h2 2xl:h1">
              FullStack Developer
            </p>
          </CardDescription>
        </>
      </CardHeader>
      <div className="social-links -mb-2">
        <GithubButton
          href={`${env.NEXT_PUBLIC_GITHUB_PROFILE_URL}`}
          text={"Github"}
        />
        <LinkedInButton
          href={`${env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL}`}
          text={"LinkedIn"}
        />
        <ContactForm />
      </div>
      <TabsProfile />
    </CardContainer>
  );
}
