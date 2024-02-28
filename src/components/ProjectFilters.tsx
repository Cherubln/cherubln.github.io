import filters from "../constants/filter-set";

const ProjectsFilters = ({
  projectsFilter,
  setProjectsFilter,
}: {
  projectsFilter: string;
  setProjectsFilter: (arg: string) => void;
}) => {
  return filters.map((filter, index) => (
    <div key={filter.filterName} className="flex gap-2">
      <p
        className={`cursor-pointer hover:text-base-content duration-150 relative ${
          projectsFilter === filter.filterName
            ? "text-base-content before:text-primary"
            : "text-neutral-content/40"
        }`}
        onClick={() => setProjectsFilter(filter.filterName)}
      >
        <span className="capitalize">{filter.filterName}</span>
        <span
          className={`block -top-3 -right-3 absolute text-xs duration-150  italic w-4 h-full  ${
            projectsFilter === filter.filterName
              ? "text-primary"
              : "text-inherit"
          }`}
        >
          {filter.numberOfProjects}
        </span>
      </p>
      <span
        className={`text-neutral-content/40 ${
          index < filters.length - 1 ? "inline-block" : "hidden"
        }`}
      >
        /
      </span>
    </div>
  ));
};

export default ProjectsFilters;
