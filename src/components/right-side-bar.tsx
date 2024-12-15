import { mock_data_followers } from "@/api/mock-data-api";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { blog_avatar, blog_background } from "@/assets";

const RightSideBar = () => {
  return (
    <Card className="p-6 h-full rounded-l-lg">
      <div>
        <div className="flex justify-between items-center">
          <h1>Follow Suggestions</h1>
          <Button variant={"ghost"} className="rounded-full">
            View All
          </Button>
        </div>

        <ScrollArea className="md:h-[300px]">
          {mock_data_followers.map((follower) => (
            <div className="flex items-center justify-between mt-2">
              <div className="flex gap-4 items-center">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={follower.userAvatar} />
                </Avatar>

                <h4>{follower.name}</h4>
              </div>
              <Button variant={"ghost"}>Follow</Button>
            </div>
          ))}
        </ScrollArea>
      </div>
      <Separator className="mt-4" />

      <ScrollArea className="md:h-[275px]">
        <div className="flex flex-col gap-2 p-2">
          <div className="flex items-center justify-between">
            <div>@ Today on Threads</div>
            <Button className="rounded-full" variant={"ghost"}>
              View All
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Avatar className="w-8 h-8">
              <AvatarImage src={blog_avatar} />
            </Avatar>
            <h1>Devon Balders</h1>
          </div>
          <p>
            Sollicitudin, nulla arcu hendrerit urna, gravida molestie sapien
            augue vel justo. Curabitur vulputate suscipit congue. Donec lobortis
            ultrices hendrerit. Maecenas efficitur volutpat nunc sit amet
            consequat...
          </p>

          <img src={blog_background} className="w-50" alt="thread-photo" />
        </div>
      </ScrollArea>
    </Card>
  );
};

export default RightSideBar;
