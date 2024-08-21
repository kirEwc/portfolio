
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <br />
      <div className="container mx-auto flex flex-col md:flex-col-reverse justify-center items-center">
        <div className="text-center md:text-left mt-3">
          <p className="text-sm mb-2">{`2024 Copyright © | Code by <alda dev/>`}</p>
          
        </div>
        <div className="mt-4 md:mt-0 flex justify-center space-x-4">
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            {/* <FacebookIcon className="h-6 w-6" /> */}
            
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            {/* <TwitterIcon className="h-6 w-6" /> */}
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            {/* <LinkedInIcon className="h-6 w-6" /> */}
          </a>
          <a href="https://github.com/kirEwc/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            {/* <GitHubIcon className="h-6 w-6" /> */}
            <img
            src="/assets/skills/github.svg"
            alt="Code Icon"
            className="h-6 w-6"
          />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
