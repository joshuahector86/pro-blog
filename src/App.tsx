import { blog_background } from "./assets";
import { LandingPage } from "./pages";

function App() {
  return (
    <div
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
