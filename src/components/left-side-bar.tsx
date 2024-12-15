import {
  HeartIcon,
  HomeIcon,
  PenBoxIcon,
  PersonStandingIcon,
  SearchIcon,
} from "lucide-react";

const LeftNavBar = () => {
  return (
    <div className="text-muted-foreground w-[3rem]">
      <div className="flex flex-col items-center gap-4 border p-3 rounded-full">
        <HomeIcon
          size={30}
          className="hover:bg-gray-800 bg-gray-800 p-1 rounded-full"
        />
        <SearchIcon size={30} className="hover:bg-gray-800 p-1 rounded-full" />
        <PenBoxIcon size={30} className="hover:bg-gray-800 p-1 rounded-full" />
        <HeartIcon size={30} className="hover:bg-gray-800 p-1 rounded-full" />
        <PersonStandingIcon
          size={30}
          className="hover:bg-gray-800 p-1 rounded-full"
        />
      </div>
    </div>
  );
};

export default LeftNavBar;
