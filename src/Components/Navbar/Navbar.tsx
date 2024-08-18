import { HomeIcon, UserIcon, AcademicCapIcon, BriefcaseIcon,  ChartBarIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  return (
    <nav className="bg-gray-500 bg-opacity-50 fixed top-0 left-0 w-full z-10 backdrop-blur-sm">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          My Portfolio
        </div>
        <div className="space-x-4 flex items-center">
          <a href="#home" className="text-gray-300 hover:text-white inline-flex items-center">
            <HomeIcon className="h-5 w-5 mr-1" />
            Home
          </a>
          <a href="#about-me" className="text-gray-300 hover:text-white inline-flex items-center">
            <UserIcon className="h-5 w-5 mr-1" />
            About Me
          </a>
          <a href="#skills" className="text-gray-300 hover:text-white inline-flex items-center">
          <ChartBarIcon className="h-5 w-5 text-gray-300" />
            Skills
          </a>
          <a href="#training" className="text-gray-300 hover:text-white inline-flex items-center">
            <AcademicCapIcon className="h-5 w-5 mr-1" />
            Training
          </a>
          <a href="#projects" className="text-gray-300 hover:text-white inline-flex items-center">
            <BriefcaseIcon className="h-5 w-5 mr-1" />
            Projects
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white inline-flex items-center">
            <EnvelopeIcon className="h-5 w-5 mr-1" />
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
