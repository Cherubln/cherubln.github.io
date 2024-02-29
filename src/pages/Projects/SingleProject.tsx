import Logo from "../../components/LogoWrapper";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Footer from "../Footer";

const SingleProject = () => {
  return (
    <div className="container mx-auto ">
      <header className="navbar sticky top-0 z-50  bg-base-100 justify-between pt-6 pb-2 px-8 md:px-16 drop-shadow-lg sm:drop-shadow-none">
        <button
          className="btn btn-lg btn-circle bg-neutral"
          onClick={() => {
            history.back();
          }}
        >
          <MdOutlineArrowBackIosNew className="w-6 h-6" />
        </button>
        <Logo />
      </header>
      <div className="px-8 md:px-16">
        <Footer />
      </div>
    </div>
  );
};

export default SingleProject;
