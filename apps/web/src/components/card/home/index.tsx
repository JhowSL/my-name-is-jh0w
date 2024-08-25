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
import { SendMessaTroughForm } from "../../button/send-message-button";
import { CardContainer } from "../../containter";
import { Typography } from "../../typography";

export function CardHome(): JSX.Element {
  const text = Typography();
  return (
    <CardContainer>
      <CardHeader className="flex mx-2 my-4 py-2">
        <>
          <CardTitle className="my-4 flex justify-center">
            Hello, My Name Is Jh0w!
          </CardTitle>
          <CardDescription className="flex justify-center">
            <Avatar className="scale-150">
              <AvatarImage src="" alt="jh0w" className="scale-125" />
              <AvatarFallback>JH</AvatarFallback>
            </Avatar>
          </CardDescription>
        </>
      </CardHeader>
      <CardContent className="flex text-justify">{text.BioSection}</CardContent>
      <CardFooter className="flex-col">
        <GithubButton
          href={`${env.NEXT_PUBLIC_GITHUB_PROFILE_URL}`}
          text={"My Github Profile"}
        />
        <LinkedInButton
          href={`${env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL}`}
          text={"My LinkedIn Profile"}
        />
        <SendMessaTroughForm text={"Send Message For Me"} />
      </CardFooter>
    </CardContainer>
  );
}
