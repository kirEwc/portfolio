import { HomeIcon, UserIcon, AcademicCapIcon, BriefcaseIcon, ChartBarIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  return (
    <nav className="bg-gray-500 bg-opacity-50 fixed top-0 left-0 w-full z-10 backdrop-blur-sm">
      <div className="container mx-auto p-4 flex justify-between items-center">
      <a href="https://github.com/kirEwc/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
      <div className="flex items-center text-white text-xl font-bold group">
          <img
            src="/assets/Navbar/code-off.svg"
            alt="Code Icon"
            className="h-8 w-8 mr-2 transition-transform duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-110"
          />
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent transition-transform duration-300 ease-in-out group-hover:translate-x-1">
            {`aldadev `}
          </span>
        </div>
        </a>
        <div className="space-x-4 flex items-center">
          <a href="#home" className="relative text-gray-300 hover:text-white inline-flex items-center group">
            <HomeIcon className="h-5 w-5 mr-1" />
            Inicio
            <span className="absolute left-0 bottom-0 block w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#about-me" className="relative text-gray-300 hover:text-white inline-flex items-center group">
            <UserIcon className="h-5 w-5 mr-1" />
            Sobre mi
            <span className="absolute left-0 bottom-0 block w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#skills" className="relative text-gray-300 hover:text-white inline-flex items-center group">
            <ChartBarIcon className="h-5 w-5 mr-1" />
            Habilidades
            <span className="absolute left-0 bottom-0 block w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#training" className="relative text-gray-300 hover:text-white inline-flex items-center group">
            <AcademicCapIcon className="h-5 w-5 mr-1" />
            Formacion
            <span className="absolute left-0 bottom-0 block w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#projects" className="relative text-gray-300 hover:text-white inline-flex items-center group">
            <BriefcaseIcon className="h-5 w-5 mr-1" />
            Proyectos
            <span className="absolute left-0 bottom-0 block w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#contact" className="relative text-gray-300 hover:text-white inline-flex items-center group">
            <EnvelopeIcon className="h-5 w-5 mr-1" />
            Contacto
            <span className="absolute left-0 bottom-0 block w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
