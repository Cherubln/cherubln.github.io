import Logo from "./LogoWrapper";
import { HiMenuAlt2 } from "react-icons/hi";

const tabs = ["Skills", "Work", "Experience", "Contact"];

const Navbar = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
}) => {
  return (
    <header className="navbar sticky top-0 z-50  bg-base-100 justify-between pt-6 pb-2 px-8 md:px-16 drop-shadow-lg sm:drop-shadow-none">
      <Logo />
      <nav>
        <ul className={`hidden sm:flex  flex-row gap-10 items-start`}>
          {tabs.map((item, id) => {
            return (
              <li
                key={item}
                className={`relative list-none list-outside  font-semibold   cursor-pointer  before:block before:-top-3 before:right-0 before:absolute before:text-xs before:italic   hover:before:text-primary before:w-4 before:h-full sm:border-none sm:after:block sm:after:mt-1 sm:after:w-0 sm:after:h-0.5 sm:after:hover:w-full sm:after:duration-300 sm:after:bg-primary ${
                  activeTab === item
                    ? "before:text-primary"
                    : "before:text-neutral-content/40"
                } ${id === 0 && "before:content-['01']"} ${
                  id === 1 && "before:content-['02']"
                } ${id === 2 && "before:content-['03']"} ${
                  id === 3 && "before:content-['04']"
                }`}
              >
                <a
                  href={`#${item}`}
                  className={`w-full relative  ${
                    activeTab === item && "text-primary "
                  }`}
                  onClick={() => {
                    setActiveTab(item);
                  }}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="order-2 sm:hidden dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <HiMenuAlt2 className="h-8 w-8" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  p-2 shadow bg-base-100 rounded-box "
          >
            {tabs.map((item) => {
              return (
                <li
                  key={item}
                  className="list-none list-outside p-1 font-semibold   cursor-pointer"
                >
                  <a
                    href={`#${item}`}
                    className={`w-full relative  ${
                      activeTab === item && "text-primary "
                    }`}
                    onClick={() => {
                      setActiveTab(item);
                    }}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
