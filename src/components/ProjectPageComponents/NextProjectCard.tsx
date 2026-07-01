import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import suggestNextProject from "../../helpers/suggestNextProject";

export const NextProjectCard = ({ projectSlug }: { projectSlug: string }) => {
  const nextProject = suggestNextProject(projectSlug);
  return (
    <Link
      to={`/projects/${nextProject.slug}`}
      viewTransition
      className="ml-auto mt-8 mb-16 group hover:cursor-pointer card p-2 sm:p-4 w-48 h-24 sm:w-72 sm:h-32 bg-base-300 shadow-xl image-full"
    >
      <figure className="opacity-45 transition-all duration-500">
        <img src={nextProject.thumbnail} alt={nextProject.name} />
      </figure>
      <div className="card-body p-2 sm:p-4 justify-between">
        <p className="text-[10px] sm:text-xs uppercase tracking-wider">
          Next project
        </p>
        <h2 className="card-title text-xs sm:text-base text-primary group-hover:text-neutral-content line-clamp-1">
          {nextProject.name}
        </h2>
        <div className="card-actions self-end">
          <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm font-semibold cursor-pointer hover:text-primary">
            <span>Show</span>
            <FaArrowRight className="-translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[10px] sm:text-xs" />
          </div>
        </div>
      </div>
    </Link>
  );
};
