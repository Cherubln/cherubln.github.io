import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import suggestNextProject from "../../helpers/suggestNextProject";

export const NextProjectCard = ({ projectSlug }: { projectSlug: string }) => {
  const nextProject = suggestNextProject(projectSlug);
  return (
    <div className="ml-auto mt-8 mb-16 group hover:cursor-pointer card card-compact w-72 h-32 bg-base-300 shadow-xl image-full">
      <figure className="opacity-0 group-hover:opacity-100 transition-all duration-500">
        <img src={nextProject.thumbnail} alt={nextProject.name} />
      </figure>
      <div className="card-body">
        <p>Next project</p>
        <h2 className="card-title text-primary group-hover:text-neutral-content">
          {nextProject.name}
        </h2>
        <div className="card-actions self-end">
          <Link
            to={`/projects/${nextProject.slug}`}
            unstable_viewTransition
            className="flex items-center gap-2 text-semibold cursor-pointer hover:text-primary"
          >
            <span>Show</span>
            <FaArrowRight className="-translate-x-2 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};
