import { blog_background } from "./assets";
import { LandingPage } from "./pages";

function App() {
  return (
    <div
      className="flex justify-center"
      style={{
        backgroundImage: `url(${blog_background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <LandingPage />
    </div>
  );
}

export default App;
