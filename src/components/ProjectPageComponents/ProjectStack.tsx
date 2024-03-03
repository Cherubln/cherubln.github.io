import { ProjectType } from "../../types/ProjectType";
import { CiGlobe } from "react-icons/ci";
import { FaArrowRight, FaGithub } from "react-icons/fa";

export const ProjectStack = ({ project }: { project: ProjectType }) => {
  return (
    <div className="justify-self-end flex sm:flex-row md:flex-col flex-col gap-12 sm:justify-between md:justify-normal">
      <div className="order-1 flex flex-col gap-8 self-start sm:order-2 md:order-1">
        <a
          href={project?.website}
          target="_blank"
          className={`${
            project?.website
              ? "hover:text-primary"
              : "text-neutral-content/20 cursor-not-allowed"
          } group flex gap-2 items-center duration-150`}
        >
          <CiGlobe className="w-7 h-7 -ml-0.5" />
          <span>
            Open Project
            {!project?.website && <span className="text-sm ml-1">(WIP)</span>}
          </span>
          {project?.website && (
            <FaArrowRight className="-translate-x-2 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 transition-all duration-300" />
          )}
        </a>
        <a
          href={project?.sourceCode}
          target="_blank"
          className={`${
            project?.sourceCode
              ? "hover:text-primary"
              : "text-neutral-content/20 cursor-not-allowed"
          } group flex gap-2 items-center duration-150`}
        >
          <FaGithub className="w-6 h-6" />
          <span>
            Source Code
            {!project?.sourceCode && (
              <span className="text-sm ml-1">(Private)</span>
            )}
          </span>
          {project?.sourceCode && (
            <FaArrowRight className="-translate-x-2 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 transition-all duration-300" />
          )}
        </a>
      </div>
      <div className="order-2 sm:order-1 md:order-2">
        <h3 className="text-sm font-semibold mb-3 uppercase">Stack</h3>
        <ul className="steps steps-vertical md:steps-horizontal step-primary">
          {project?.stack.map((tech) => (
            <li key={tech} className=" step step-primary capitalize">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
