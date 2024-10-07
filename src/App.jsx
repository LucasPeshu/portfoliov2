import Header from "./components/Header"
import Inicio from "./components/Inicio"
import AboutMe from "./components/AboutMe"
import Container from "./components/Container"
import FeaturedProjects from "./components/FeaturedProjects"


function App() {

  return (
    <div className="bg-gradient-to-br from-neutral-800 via-neutral-900 to-black">
      <Header/>
      <Inicio/>
      <Container>
        <AboutMe/>
        <FeaturedProjects/>

      </Container>
    </div>
  )
}

export default App
