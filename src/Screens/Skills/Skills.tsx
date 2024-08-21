import React from "react";

export const Skills = () => {
  const skills = [
    { src: "/assets/skills/git.svg", alt: "Git" },
    { src: "/assets/skills/github.svg", alt: "GitHub" },
    { src: "/assets/skills/ts.svg", alt: "TypeScript" },
    { src: "/assets/skills/react.svg", alt: "React" },
    { src: "/assets/skills/vite.svg", alt: "Vite" },
    { src: "/assets/skills/tailwind.svg", alt: "Tailwind CSS" },
  ];

  return (
    <div className="flex flex-wrap justify-between gap-6 p-8 w-full rounded-lg shadow-xl">
      {skills.map((skill, index) => (
        
        <div key={index} className="group flex flex-col items-center">
          <img
            src={skill.src}
            alt={skill.alt}
            className="w-24 h-24 transition-transform duration-300 ease-in-out transform hover:scale-110 group-hover:shadow-2xl rounded-full bg-white p-4"
          />
          <span className="mt-2 text-sm text-gray-700 group-hover:text-white font-semibold">
            {skill.alt}
          </span>
        </div>
      ))}
    </div>
  );
};
