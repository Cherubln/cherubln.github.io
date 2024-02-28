import { useState } from "react";
import Project from "../components/ProjectComponent";
import ProjectsFilters from "../components/ProjectFilters";
import useProjects from "../hooks/useProjects";
import { AnimatePresence, motion } from "framer-motion";

const ProjectSection = () => {
  const [projectsFilter, setProjectsFilter] = useState("all");
  const projects = useProjects(projectsFilter);

  return (
    <div id="Work" className="py-14">
      <div>
        <h2 className="text-3xl md:text-5xl font-bold  text-center my-8">
          Work
        </h2>
        <div className="mx-auto max-w-sm text-center">
          <q>
            I've had the privilege of working on various projects. Explore and
            dive into my work below to see how I've made an impact.
          </q>
          _
        </div>
      </div>
      <div className="mt-16 mb-10">
        <div className="flex gap-3 items-center">
          <p>Filter by:</p>
          <ProjectsFilters
            projectsFilter={projectsFilter}
            setProjectsFilter={setProjectsFilter}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-14 content-center justify-center">
        <AnimatePresence>
          {projects.map((project, id) => {
            return (
              <motion.div
                key={`{${id}-${project.name}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Project key={project.name} project={project} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectSection;
