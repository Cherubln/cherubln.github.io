import { useState, useEffect } from "react";
import projectSet from "../constants/project-set";
import { ProjectType } from "../types/ProjectType";

const useProjects = (projectsFilter: string) => {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    if (projectsFilter === "all") setProjects(projectSet);
    else
      setProjects(
        projectSet.filter((project) => project.category === projectsFilter)
      );
  }, [projectsFilter]);

  return projects;
};

export default useProjects;
