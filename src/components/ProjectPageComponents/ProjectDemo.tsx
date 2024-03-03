import { ProjectType } from "../../types/ProjectType";

export const ProjectDemo = ({ project }: { project: ProjectType }) => {
  return (
    <div className="mockup-browser border border-base-300 bg-neutral my-10">
      <div className="mockup-browser-toolbar">
        <div className="input border border-base-300 bg-neutral">
          {project?.website || "http://localhost:{PORT}"}
        </div>
      </div>
      <div className="flex justify-center  border-t border-base-300 bg-neutral">
        <img
          src={project?.screenshots ? project.screenshots : project?.thumbnail}
          alt=""
          className="max-w-full object-contain"
        />
      </div>
    </div>
  );
};
