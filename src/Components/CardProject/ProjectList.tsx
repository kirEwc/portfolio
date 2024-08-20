import { projects } from "../../data/data.tsx";
import { ProjectCard } from "./ProjectCard";

export const ProjectList = () => {
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-green-500">
        Mis Proyectos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
          key={index}
          imageUrl={project.imageUrl}
          title={project.title}
          description={project.description}
          linkUrl={project.linkUrl}
          />
        ))}
      </div>
        </>
  );
};
