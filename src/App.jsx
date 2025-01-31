import Header from "./components/Header";
import Inicio from "./components/Inicio";
import AboutMe from "./components/AboutMe";
import Container from "./components/Container";
import FeaturedProjects from "./components/FeaturedProjects";

function App() {
  return (
    <div className="font-liter">
      <Header />
      <Inicio />
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="relative h-full min-h-screen w-full bg-black [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [&>div]:bg-[size:14px_24px]">
            <div></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 ">
          <Container>
            <AboutMe />
            <FeaturedProjects />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
