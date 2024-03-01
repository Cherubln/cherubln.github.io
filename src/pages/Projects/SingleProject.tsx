import Logo from "../../components/LogoWrapper";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../Footer";
import { Link, useParams } from "react-router-dom";
import projectSet from "../../constants/project-set";

const SingleProject = () => {
  const { projectName } = useParams();
  const project = projectSet.find((project) => project.slug === projectName);

  const handleBack = () => history.back();
  return (
    <div className="container mx-auto ">
      <header className="navbar sticky top-0 z-50  bg-base-100 justify-between pt-6 pb-2 px-8 md:px-16 drop-shadow-lg sm:drop-shadow-none">
        <div className="md:order-2">
          <Logo />
        </div>
        <button
          className="md:order-1 btn btn-ghost md:btn-circle md:bg-neutral"
          onClick={handleBack}
        >
          <MdOutlineArrowBackIosNew className="w-6 h-6" />
        </button>
      </header>
      <div className="px-8 md:px-16">
        <div className="my-8">
          <div className=" text-sm breadcrumbs">
            <ul>
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <span className="hover:link" onClick={handleBack}>
                  Projects
                </span>
              </li>
              <li>{project?.name}</li>
            </ul>
          </div>
          <div className="my-8 flex flex-col md:flex-row gap-8 justify-between">
            <div>
              <h2 className="max-w-sm text-3xl md:text-5xl font-semibold mb-8">
                {project?.name}
              </h2>
              <p className="max-w-sm leading-relaxed">
                Flora Fables is an online market web app that offers a variety
                of flowers and vase-covered plants for sale. It aims to solve
                some real world problems, such as: - supporting small businesses
                and local communities by connecting customers with independent
                florists and growers, and providing them with a platform to
                showcase their work and earn income.
              </p>
            </div>
            <div className="flex md:flex-col gap-12 justify-between">
              <div>
                <h3 className="text-sm font-semibold mb-3 uppercase">Stack</h3>
                <ul className="steps steps-vertical md:steps-horizontal">
                  <li className="step ">React</li>
                  <li className="step ">TypeScript</li>
                  <li className="step ">NextJS</li>
                  <li className="step ">TailwindCSS</li>
                </ul>
              </div>
              <div className="flex flex-col gap-8 self-start">
                <a
                  href=""
                  className="group link hover:link-primary flex gap-2 items-center duration-150"
                >
                  <span>Source Code</span>
                  <FaArrowRight className="-translate-x-5 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 transition-all duration-300" />
                </a>
                <a
                  href=""
                  className="group link hover:link-primary flex gap-2 items-center duration-150"
                >
                  <span>Open Project</span>{" "}
                  <FaArrowRight className="-translate-x-5 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="mockup-browser border border-base-300 bg-neutral mb-16">
          <div className="mockup-browser-toolbar">
            <div className="input border border-base-300 bg-neutral">
              https://flora-flables.com
            </div>
          </div>
          <div className="flex justify-center  border-t border-base-300 bg-neutral">
            <img
              src={project?.image}
              alt=""
              className="max-w-full object-contain"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SingleProject;
