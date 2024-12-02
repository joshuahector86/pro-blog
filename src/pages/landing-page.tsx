import LeftNavBar from "@/components/left-side-bar";
import RightSideBar from "@/components/right-side-bar";

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="gap-10 grid grid-cols-6">
        <div className="col-span-1">
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
    <div>
      <div>Blog Content</div>
    </div>
  );
};

export default LandingPage;
