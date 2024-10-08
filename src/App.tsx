import Navbar from "./Components/Navbar/Navbar";
import { Home } from "./Screens/Home/Home";

import './App.css'
import { About } from "./Screens/About/About";
import { Training } from "./Screens/Training/Training";
import { Projects } from "./Screens/Projects/Projects";
import { Skills } from "./Screens/Skills/Skills";
import Footer from "./Screens/Footer";
import { Contact } from "./Screens/Contact/contact";

function App() {
  return (
    <div>
      <Navbar />

      {/* home */}
      <section id="home" className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white text-center px-4">
       <Home/>
      </section>

      {/* Sobre mi */}
      <section id="about-me" className="min-h-screen bg-gray-800 text-white p-8 flex flex-col justify-center items-center">
        <About/>
      </section>

      {/* habilidades */}
      <section id="skills" className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white text-center px-4">
        <Skills/>
      </section>

      {/* estudios */}
      <section id="training" className="min-h-screen bg-gray-800 text-white p-8 flex flex-col justify-center items-center">
        <Training/>
      </section>

      {/* Proyectos */}
      <section id="projects" className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white text-center px-4">
        <Projects/>
      </section>

      {/* Contacto */}
      <section id="contact" className="min-h-screen bg-gray-800 text-white py-8 flex flex-col justify-center items-center">
        <Contact/>
        
      </section>

      {/* Footer */}
        <Footer/>
      

      
    </div>
  );
}

export default App;
