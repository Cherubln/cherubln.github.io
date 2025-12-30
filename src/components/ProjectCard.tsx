import { MdArrowForwardIos } from "react-icons/md";

import { ProjectType } from "../types/ProjectType";
import { Link } from "react-router-dom";

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <Link
      to={`/projects/${project.slug}`}
      viewTransition
      className="card card-compact rounded-lg max-w-xs h-80 bg-base-300 shadow-xl group cursor-pointer overflow-hidden"
    >
      <figure>
        <img
          src={project.thumbnail}
          alt={project.name}
          className="group-hover:scale-105 transition-all duration-300 w-full h-40 object-cover bg-neutral-content"
        />
      </figure>
      <div className="card-body bg-neutral">
        <h2 className="card-title font-light">{project.name}</h2>
        <p className="truncate">{project.description}</p>
        <p className="capitalize text-neutral-content/40">
          {project.category} Development
        </p>
        <div className="card-actions self-end">
          <span className="flex items-center gap-1 -translate-y-5 opacity-0 text-semibold group-hover:opacity-100 cursor-pointer group-hover:translate-y-0 transition-all duration-300 hover:text-primary">
            <span>Show project</span> <MdArrowForwardIos className="mb-1" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Project;
