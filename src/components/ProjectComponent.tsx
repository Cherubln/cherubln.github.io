import { MdArrowForwardIos } from "react-icons/md";

import { ProjectType } from "../types/ProjectType";

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <div className="card card-compact rounded-md  max-w-sm h-80 bg-base-300 shadow-xl group cursor-pointer">
      <figure>
        <img
          src={project.image}
          alt={project.name}
          className="group-hover:scale-105 transition-all duration-300 w-full h-full object-cover bg-neutral-content"
        />
      </figure>
      <div className="card-body bg-neutral">
        <h2 className="card-title font-light">{project.name}</h2>
        <p className="text-sm capitalize">{project.category} Development</p>
        <div className="card-actions self-end">
          <p className="flex items-center gap-1 -translate-y-5 opacity-0 text-semibold group-hover:opacity-100 cursor-pointer group-hover:translate-y-0 transition-all duration-300 hover:text-primary">
            <span>Show project</span> <MdArrowForwardIos />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
