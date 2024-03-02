import Logo from "./LogoWrapper";
import { HiMenuAlt2 } from "react-icons/hi";
import navigations from "../constants/navigations";
import { HashLink } from "react-router-hash-link";

const Navbar = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
}) => {
  return (
    <header className="navbar sticky top-0 z-50 bg-base-100 justify-between pt-6 pb-2 px-8 md:px-16 drop-shadow-lg sm:drop-shadow-none">
      <Logo />
      <nav>
        <div className={`hidden sm:flex  flex-row gap-10 items-start`}>
          {navigations.map((item, id) => {
            return (
              <HashLink
                unstable_viewTransition
                key={item}
                to={`#${item}`}
                onClick={() => {
                  setActiveTab(item);
                }}
                className={`relative group font-semibold sm:border-none sm:after:block sm:after:mt-1 sm:after:w-0 sm:after:h-0.5 sm:after:hover:w-full sm:after:duration-300 sm:after:bg-primary w-full ${
                  activeTab === item && "text-primary "
                }`}
              >
                <span
                  className={`block -top-4 right-0 absolute text-xs duration-300 group-hover:text-primary italic w-4 h-full  ${
                    activeTab === item ? "text-primary" : "text-base-content/40"
                  }`}
                >
                  0{++id}
                </span>
                {item}
              </HashLink>
            );
          })}
        </div>
        <div className="order-2 sm:hidden dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <HiMenuAlt2 className="h-8 w-8" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  p-2 shadow bg-base-100 rounded-box "
          >
            {navigations.map((item) => {
              return (
                <HashLink
                  unstable_viewTransition
                  to={`#${item}`}
                  key={item}
                  className={`w-full relative  p-1 font-semibold   cursor-pointer ${
                    activeTab === item && "text-primary "
                  }`}
                  onClick={() => {
                    setActiveTab(item);
                  }}
                >
                  {item}
                </HashLink>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
