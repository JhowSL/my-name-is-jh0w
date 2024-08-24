import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/avatar";
import { Button } from "@repo/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/card";
import { CardContainer } from "../containter";

export function Welcome(): JSX.Element {
  return (
    <CardContainer>
      <CardHeader className="flex flex-row justify-between mx-2 my-4">
        <>
          <CardTitle className="mt-4">I'm Jh0w</CardTitle>
          <CardDescription>
            <Avatar className="scale-150 ">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="scale-125"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </CardDescription>
        </>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus,
        neque! Quas ipsum dicta placeat libero sint voluptates, aspernatur
        numquam, velit nesciunt laborum maiores ducimus debitis beatae quia illo
        impedit! At!
      </CardContent>
      <CardFooter className="flex flex-wrap justify-between ">
        <Button className="hover:scale-110">GitHub</Button>
        <Button className="hover:scale-110">LinkedIn</Button>
        <Button className="hover:scale-110">FormContact</Button>
      </CardFooter>
    </CardContainer>
  );
}
