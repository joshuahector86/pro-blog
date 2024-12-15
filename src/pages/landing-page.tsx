import LeftNavBar from "@/components/left-side-bar";
import RightSideBar from "@/components/right-side-bar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { blog_avatar } from "@/assets";
import { Input } from "@/components/ui/input";
import { ImageIcon, PlusSquareIcon, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="gap-10 grid grid-cols-6">
        <div className="col-span-1 place-content-center">
          <LeftNavBar />
        </div>
        <div className="col-span-3 ">
          <BlogContent />
        </div>
        <div className="col-span-2">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

const BlogContent = () => {
  return (
    <div className="border rounded-2xl p-2 md:min-w-[35rem] md:min-h-[35rem]">
      <BlogThreadStart />
      <div>blog feed</div>
      <Badge className="rounded-full">hello</Badge>
    </div>
  );
};

const BlogThreadStart = () => {
  return (
    <div className="p-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center p-2">
          <Avatar>
            <AvatarImage src={blog_avatar} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>John Smith</div>
        </div>
        <Button variant={"ghost"} className="bg-gray-700 rounded-full">
          Post
        </Button>
      </div>
      <Input placeholder="Start a thread..." className="rounded-xl" />
      <div className="flex justify-between">
        <div className="flex p-2 gap-2">
          <Badge className="rounded-full border flex gap-1 items-center px-2">
            <ImageIcon size={15} />
            <p className="text-xs">vacation02.jpg</p>
            <XCircle size={15} />
          </Badge>

          <Badge className="rounded-full text-xs gap-1">
            <PlusSquareIcon size={15} />
            <p>Attach file</p>
          </Badge>
        </div>
        <div>dropdown menu</div>
      </div>
    </div>
  );
};

export default LandingPage;
