import { ProjectType } from "../../types/ProjectType";

export const ProjectDescription = ({ project }: { project: ProjectType }) => {
  return (
    <div>
      <h2 className="max-w-lg text-3xl md:text-5xl font-semibold mb-8">
        {project?.name}
      </h2>
      <p className="max-w-lg leading-relaxed">{project?.description}</p>
    </div>
  );
};
