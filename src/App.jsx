import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import MeProjects from "./pages/MeProjects.jsx";
import Contacts from "./pages/Contacts.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <MeProjects />
      <Contacts />
    </>
  );
}

export default App;
