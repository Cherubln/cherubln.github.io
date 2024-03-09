import Logo from "../../components/LogoWrapper";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Footer from "../Footer";
import { Link, useParams } from "react-router-dom";
import projectSet from "../../constants/project-set";
import NotFound from "../../components/NotFound";
import * as ProjectComponents from "../../components/ProjectPageComponents";

const SingleProject = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  const { projectName } = useParams();
  const project = projectSet.find((project) => project.slug === projectName);

  if (!project) return <NotFound />;
  return (
    <div key={projectName} className="max-w-6xl mx-auto">
      <header className="navbar sticky top-0 z-50  bg-base-100 justify-between pt-6 pb-2 px-8 md:px-16 drop-shadow-lg sm:drop-shadow-none">
        <div className="md:order-2">
          <Logo />
        </div>
        <Link
          unstable_viewTransition
          to={"/"}
          className="md:order-1 btn btn-ghost md:btn-circle"
        >
          <MdOutlineArrowBackIosNew className="w-6 h-6" />
        </Link>
      </header>
      <div className="relative px-8 md:px-16">
        <div className="mt-8 mb-3 capitalize badge badge-neutral">
          {project.category} Development
        </div>
        <ProjectComponents.BreadcrumbsPath path={project.name} />
        <div className="my-8">
          <div className="my-8 flex flex-col md:flex-row gap-10 md:gap-20 justify-between">
            <ProjectComponents.ProjectDescription project={project} />
            <ProjectComponents.ProjectStack project={project} />
          </div>
        </div>
        <ProjectComponents.ProjectDemo project={project} />
        <ProjectComponents.NextProjectCard projectSlug={project.slug} />
        <Footer />
      </div>
    </div>
  );
};

export default SingleProject;
