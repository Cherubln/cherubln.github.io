import projectSet from "./project-set";

const filters: { filterName: string; numberOfProjects: number }[] = [
  { filterName: "all", numberOfProjects: projectSet.length },
];
projectSet.forEach((project) => {
  const filter = filters.find(
    (filter) => filter.filterName === project.category.toLowerCase()
  );
  if (filter) {
    filter.numberOfProjects++;
  } else
    filters.push({
      filterName: project.category.toLowerCase(),
      numberOfProjects: 1,
    });
});

export default filters;
