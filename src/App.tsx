import Navbar from "./Components/Navbar/Navbar";
import { Home } from "./Screens/Home/Home";

import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <section id="home" className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white text-center px-4">
       <Home/>
      </section>
      <section id="about-me" className="min-h-screen pt-16 bg-green-500 p-8">
        <h1 className="text-white text-4xl">About Me</h1>
      </section>
      <section id="skills" className="min-h-screen pt-16 bg-red-500 p-8">
        <h1 className="text-white text-4xl">Skills</h1>
      </section>
      <section id="training" className="min-h-screen pt-16 bg-yellow-500 p-8">
        <h1 className="text-white text-4xl">Training</h1>
      </section>
      <section id="projects" className="min-h-screen pt-16 bg-purple-500 p-8">
        <h1 className="text-white text-4xl">Projects</h1>
      </section>
      <section id="contact" className="min-h-screen pt-16 bg-pink-500 p-8">
        <h1 className="text-white text-4xl">Contact</h1>
      </section>
    </div>
  );
}

export default App;
