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
          <CardTitle className="my-4 grid justify-center">
            Hello, My Name Is Jh0w!
          </CardTitle>
          <CardDescription className="grid justify-center">
            <Avatar className="scale-150">
              <AvatarImage src="" alt="jh0w" className="scale-125" />
              <AvatarFallback>JH</AvatarFallback>
            </Avatar>
          </CardDescription>
        </>
      </CardHeader>
      <CardContent className="grid text-justify">{text.BioSection}</CardContent>
      <CardFooter className="grid grid-cols-2 ">
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
