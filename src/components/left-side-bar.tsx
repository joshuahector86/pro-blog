import {
  HeartIcon,
  HomeIcon,
  PenBoxIcon,
  PersonStandingIcon,
  SearchIcon,
} from "lucide-react";

const LeftNavBar = () => {
  return (
    <div className="flex flex-col gap-4 text-muted-foreground border p-3 rounded-full bg-gray-900">
      <HomeIcon size={20} />
      <SearchIcon size={20} />
      <PenBoxIcon size={20} />
      <HeartIcon size={20} />
      <PersonStandingIcon size={20} />
    </div>
  );
};

export default LeftNavBar;
