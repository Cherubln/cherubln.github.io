import projectSet from "../constants/project-set";

const getNextProject = (slug?: string) => {
  const currentProjectIdx = projectSet.findIndex(
    (project) => project.slug === slug
  );
  const nextProjectIdx = (currentProjectIdx + 1) % projectSet.length;
  return projectSet[nextProjectIdx];
};

export default getNextProject;
