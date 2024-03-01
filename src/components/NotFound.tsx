import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import notFound from "../../public/404trans.png";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col gap-5 items-center justify-center">
      <img src={notFound} alt="404" className="max-w-80" />
      <div className="flex flex-col items-center justify-center gap-12">
        <p className="w-2/3 text-center leading-relaxed">
          Sorry, we can't find that page! <br />
          Don't worry though, everything is STILL AWESOME!
        </p>
        <Link
          to={"/"}
          unstable_viewTransition
          className="btn btn-outline btn-primary"
        >
          <MdOutlineArrowBackIosNew className="animate-pulse w-5 h-5" />
          <span>Go back</span>
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
