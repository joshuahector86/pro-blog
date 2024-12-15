import { blog_avatar, blog_background } from "@/assets";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Ellipsis } from "lucide-react";

const BlogFeedCard = () => {
  return (
    <Card className="border-none flex h-full p-4">
      <div className="min-h-[20rem] flex flex-col gap-2 items-center ">
        <Avatar>
          <AvatarImage src={blog_avatar} />
        </Avatar>

        <Separator orientation="vertical" />

        <Avatar className="w-5 h-5">
          <img src={blog_avatar} className=" rounded-full" />
        </Avatar>
      </div>

      <div>
        <CardHeader>
          <div className="flex justify-between items-center mt-[-1.75rem]">
            <h1>Name Here</h1>

            <div className="flex gap-2 items-center">
              <div className="text-muted-foreground">time posted ago</div>
              <Button variant={"ghost"}>
                <Ellipsis />
              </Button>
            </div>
          </div>
          <p>
            This is where the post text will end up being: Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed bibendum, augue vitae posuere
            sollicitudin, nulla arcu hendrerit urna, gravida molestie sapien
            augue vel justo. Curabitur vulputate suscipit congue. Donec lobortis
            ultrices hendrerit. Maecenas efficitur volutpat nunc sit amet
            consequat. Morbi suscipit vulputate metus eget egestas. Duis eu eros
            in leo bibendum eleifend. Suspendisse eu magna est. Proin feugiat
            rhoncus erat nec efficitur. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Integer lectus
            massa, vehicula eget nunc quis, pharetra lobortis est. Donec aliquet
            malesuada auctor.
          </p>
        </CardHeader>
        <CardContent>
          <img src={blog_background} alt="post-image" className="w-50" />
        </CardContent>
        <CardFooter></CardFooter>
      </div>
    </Card>
  );
};

export default BlogFeedCard;
