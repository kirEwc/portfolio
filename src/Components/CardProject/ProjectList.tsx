import { projects } from "../../data/data.tsx";
import { ProjectCard } from "./ProjectCard";

export const ProjectList = () => {
  return (
    <div className="">
      <h2 className="text-3xl font-semibold text-gray-200 mb-4 text-center ">
      Proyectos
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
        </div>
  );
};
