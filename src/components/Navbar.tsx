import Logo from "./LogoWrapper";
import { HiMenuAlt2 } from "react-icons/hi";
import navigations from "../constants/navigations";
import { HashLink } from "react-router-hash-link";
import { useRef } from "react";

const Navbar = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
}) => {
  const toggleRef = useRef<HTMLInputElement>(null);
  return (
    <header className=" bg-base-100 w-full rounded-md sticky top-0 z-50 shadow-md md:shadow-none  pt-4  px-4 md:px-14 ">
      <input
        ref={toggleRef}
        id="navbar-1-toggle"
        className="peer hidden"
        type="checkbox"
      />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="z-50 relative navbar">
        <div className="navbar-start">
          <Logo />
        </div>
        <nav className="navbar-end hidden lg:flex">
          <div className="flex gap-10">
            {navigations.map((item, id) => {
              return (
                <HashLink
                  viewTransition
                  key={item}
                  to={`#${item}`}
                  onClick={() => {
                    setActiveTab(item);
                  }}
                  className={`relative group font-semibold sm:border-none sm:after:block sm:after:mt-1 sm:after:w-0 sm:after:h-0.5 sm:hover:after:w-full sm:after:duration-300 sm:after:bg-primary w-full  ${
                    activeTab === item && "text-primary "
                  }`}
                >
                  <span
                    className={`block -top-4 right-0 absolute text-xs duration-300 group-hover:text-primary italic w-4 h-auto  ${
                      activeTab === item
                        ? "text-primary"
                        : "text-base-content/40"
                    }`}
                  >
                    0{++id}
                  </span>
                  {item}
                </HashLink>
              );
            })}
          </div>
        </nav>
        <div className="navbar-end lg:hidden">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            <HiMenuAlt2 className="h-5 w-5" />
          </label>
        </div>
      </div>

      <div className="hidden peer-checked:block lg:hidden absolute left-0 right-0 top-full bg-base-100 shadow-xl rounded-b-md z-40">
        <nav className="menu py-4 px-7 gap-4">
          {navigations.map((item) => {
            return (
              <HashLink
                viewTransition
                to={`#${item}`}
                key={item}
                className={`w-full relative  p-1 font-semibold   cursor-pointer ${
                  activeTab === item && "text-primary "
                }`}
                onClick={() => {
                  setActiveTab(item);
                  toggleRef.current?.click();
                }}
              >
                {item}
              </HashLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
