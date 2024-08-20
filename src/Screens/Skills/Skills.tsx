import React from 'react';

export const Skills = () => {
  return (
    // <div className="flex flex-col items-center gap-6 p-8 bg-gradient-to-r from-orange-400 to-gray-300 rounded-lg shadow-xl">
     <div className=' rounded-lg shadow-xl w-full px-72'>
     <div className="flex justify-between mt-5 mb-5">
        <img src="/assets/skills/git.svg" alt="Skill 1" className="w-24 h-24 transition-transform duration-300 ease-in-out transform hover:rotate-12 hover:shadow-2xl rounded-full bg-white p-4" />
        <img src="/assets/skills/github.svg" alt="Skill 2" className="w-24 h-24 transition-transform duration-300 ease-in-out transform hover:rotate-12 hover:shadow-2xl rounded-full bg-white p-4" />
        <img src="/assets/skills/ts.svg" alt="Skill 3" className="w-24 h-24 transition-transform duration-300 ease-in-out transform hover:rotate-12 hover:shadow-2xl rounded-full bg-white p-4" />
      </div>
      <div className="flex justify-between mt-5 mb-5">
        <img src="/assets/skills/react.svg" alt="Skill 4" className="w-24 h-24 transition-transform duration-300 ease-in-out transform hover:rotate-12 hover:shadow-2xl rounded-full bg-white p-4" />
        <img src="/assets/skills/vite.svg" alt="Skill 5" className="w-24 h-24 transition-transform duration-300 ease-in-out transform hover:rotate-12 hover:shadow-2xl rounded-full bg-white p-4" />
        <img src="/assets/skills/tailwind.svg" alt="Skill 6" className="w-24 h-24 transition-transform duration-300 ease-in-out transform hover:rotate-12 hover:shadow-2xl rounded-full bg-white p-4" />
      </div>
    </div>
  );
}
