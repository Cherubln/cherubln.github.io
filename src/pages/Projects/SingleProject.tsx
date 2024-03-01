import Logo from "../../components/LogoWrapper";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

import Footer from "../Footer";
import { Link, useParams } from "react-router-dom";
import projectSet from "../../constants/project-set";
import suggestNextProject from "../../helpers/suggestNextProject";

const SingleProject = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });

  const { projectName } = useParams();
  const project = projectSet.find((project) => project.slug === projectName);
  const nextProject = suggestNextProject(project?.slug);

  return (
    <div key={projectName} className="container mx-auto ">
      <header className="navbar sticky top-0 z-50  bg-base-100 justify-between pt-6 pb-2 px-8 md:px-16 drop-shadow-lg sm:drop-shadow-none">
        <div className="md:order-2">
          <Logo />
        </div>
        <Link
          unstable_viewTransition
          to={"/"}
          className="md:order-1 btn btn-ghost md:btn-circle md:bg-neutral"
        >
          <MdOutlineArrowBackIosNew className="w-6 h-6" />
        </Link>
      </header>
      <div className="px-8 md:px-16">
        <div className="my-8">
          <div className=" text-sm breadcrumbs">
            <ul>
              <li>
                <Link to={"/"} unstable_viewTransition className="hover:link">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:link"
                  to={"/#Work"}
                  unstable_viewTransition
                >
                  Projects
                </Link>
              </li>
              <li>{project?.name}</li>
            </ul>
          </div>
          <div className="my-8 flex flex-col md:flex-row gap-8 justify-between">
            <div>
              <h2 className="max-w-md text-3xl md:text-5xl font-semibold mb-8">
                {project?.name}
              </h2>
              <p className="max-w-md leading-relaxed">{project?.description}</p>
            </div>
            <div className="justify-self-end flex sm:flex-row md:flex-col flex-col gap-12 sm:justify-between md:justify-normal">
              <div>
                <h3 className="text-sm font-semibold mb-3 uppercase">Stack</h3>
                <ul className="steps steps-vertical md:steps-horizontal step-primary">
                  {project?.stack.map((tech) => (
                    <li className="step step-primary capitalize">{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-8 self-start">
                <a
                  href={project?.sourceCode}
                  target="_blank"
                  className={`${
                    project?.sourceCode
                      ? "hover:text-primary"
                      : "text-neutral-content/20 cursor-not-allowed"
                  } group flex gap-2 items-center duration-150`}
                >
                  <FaGithub className="w-6 h-6" />
                  <span>
                    Source Code
                    {!project?.sourceCode && (
                      <span className="text-sm ml-1">(Private)</span>
                    )}
                  </span>
                  {project?.sourceCode && (
                    <FaArrowRight className="-translate-x-2 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 transition-all duration-300" />
                  )}
                </a>
                <a
                  href={project?.website}
                  target="_blank"
                  className={`${
                    project?.website
                      ? "hover:text-primary"
                      : "text-neutral-content/20 cursor-not-allowed"
                  } group flex gap-2 items-center duration-150`}
                >
                  <CiGlobe className="w-6 h-6" />
                  <span>
                    Open Project
                    {!project?.website && (
                      <span className="text-sm ml-1">(WIP)</span>
                    )}
                  </span>
                  {project?.website && (
                    <FaArrowRight className="-translate-x-2 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 transition-all duration-300" />
                  )}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mockup-browser border border-base-300 bg-neutral my-20">
          <div className="mockup-browser-toolbar">
            <div className="input border border-base-300 bg-neutral">
              {project?.website || "http://localhost:{PORT}"}
            </div>
          </div>
          <div className="flex justify-center  border-t border-base-300 bg-neutral">
            <img
              src={
                project?.screenshots ? project.screenshots : project?.thumbnail
              }
              alt=""
              className="max-w-full object-contain"
            />
          </div>
        </div>
        <div className="ml-auto mt-8 mb-16 group hover:cursor-pointer card card-compact w-72 h-32 bg-base-300 shadow-xl image-full">
          <figure className="opacity-0 group-hover:opacity-100 transition-all duration-500">
            <img src={nextProject.thumbnail} alt={nextProject.name} />
          </figure>
          <div className="card-body">
            <p>Next project</p>
            <h2 className="card-title">{nextProject.name}</h2>
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
        <Footer />
      </div>
    </div>
  );
};

export default SingleProject;
