import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/avatar";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/card";
import { env } from "../../../utils/env";
import { GithubButton } from "../../button/profile-github-button";
import { LinkedInButton } from "../../button/profile-linkedin-button";
import { CardContainer } from "../../containter";

import { ContactForm } from "../../dialog";
import { Typography } from "../../typography";

export function BioSection(): JSX.Element {
  const text = Typography();
  return (
    <CardContainer>
      <CardHeader className="grid mx-2 my-4 py-2">
        <>
          <CardTitle className="card-title my-4 grid justify-center sm:h4 lg:h3 xl:h2 2xl:h1">
            Hello, My Name Is Jh0w!
          </CardTitle>
          <CardDescription className="grid justify-center sm:h4 lg:h3 xl:h2 2xl:h1">
            <Avatar className="scale-150">
              <AvatarImage src="" alt="jh0w" className="scale-125" />
              <AvatarFallback>JH</AvatarFallback>
            </Avatar>
          </CardDescription>
        </>
      </CardHeader>
      <CardContent className="grid text-justify card-description sm:h4 lg:h3 xl:h2 2xl:h1">
        {text.BioSection}
      </CardContent>
      <CardFooter className="grid grid-cols-1 sm:grid sm:grid-cols-3 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3 2xl:grid 2xl:grid-col-3 ">
        <GithubButton
          href={`${env.NEXT_PUBLIC_GITHUB_PROFILE_URL}`}
          text={"Github"}
        />
        <LinkedInButton
          href={`${env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL}`}
          text={"LinkedIn"}
        />
        <ContactForm />
      </CardFooter>
    </CardContainer>
  );
}
