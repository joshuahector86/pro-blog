import { Avatar, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import {
  DotIcon,
  Ellipsis,
  HeartIcon,
  MessagesSquareIcon,
  RepeatIcon,
  SendIcon,
} from "lucide-react";
import { mock_data_posts } from "@/api/mock-data-api";

const BlogFeedCard = () => {
  return (
    <div>
      {mock_data_posts.map((post) => (
        <Card className="border-none flex px-4 mt-10">
          <div className="flex flex-col items-center">
            <Avatar>
              <AvatarImage src={post.userAvatar} />
            </Avatar>
            <Separator orientation="vertical" className="h-[85%]" />
          </div>

          <div>
            <CardHeader>
              <div className="flex justify-between items-center mt-[-1.75rem]">
                <h1>{post.user}</h1>

                <div className="flex gap-2 items-center">
                  <div className="text-muted-foreground">
                    {post.timePostedAgo}
                  </div>
                  <Button variant={"ghost"}>
                    <Ellipsis />
                  </Button>
                </div>
              </div>
              <p className="text-wrap">{post.postText}</p>
            </CardHeader>
            <CardContent>
              <img
                src={post.postImage}
                alt="post-image"
                className="w-50 rounded-2xl"
              />
            </CardContent>
            <CardFooter className="flex-col items-start">
              <div className="flex gap-3">
                <HeartIcon size={20} />
                <MessagesSquareIcon size={20} />
                <RepeatIcon size={20} />
                <SendIcon size={20} />
              </div>
              <div className="flex text-muted-foreground text-sm items-center">
                <div>{post.postReplies} replies</div>
                <DotIcon size={30} />
                <div>Liked by {post.postLikes} friends and others</div>
              </div>
              <Separator />
            </CardFooter>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default BlogFeedCard;
