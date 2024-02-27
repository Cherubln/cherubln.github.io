import { CiDesktop } from "react-icons/ci";
import { FaCode } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

const Skills = () => {
  return (
    <div id="Skills" className="py-14">
      <h2 className="text-3xl md:text-5xl font-bold  text-center my-8">
        Expertise
      </h2>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0">
        <div className="border border-primary p-8 flex flex-col gap-4">
          <div className="flex gap-3">
            <FaCode className="w-16 h-auto" />
            <h2 className="text-2xl leading-none font-bold">
              <span>Software Development</span>
            </h2>
          </div>
          <div>
            <p className="flex flex-col">
              <span className="text-gray-500"> &lt;h3&gt; </span>
              <span className="ml-3 p-4 border-l border-gray-500">
                Skilled in both dynamic and static programming: Python,
                JavaScript, TypeScript.
              </span>
              <span className="text-gray-500">&lt;/h3&gt;</span>
            </p>
          </div>
        </div>
        <div className="border border-primary p-8 flex flex-col gap-4">
          <div className="flex gap-3">
            <CiDesktop className="w-16 h-auto" />
            <h2 className="text-2xl leading-none font-bold">
              <span>Front-End Development</span>
            </h2>
          </div>
          <div>
            <p className="flex flex-col">
              <span className="text-gray-500"> &lt;h3&gt; </span>
              <span className="ml-3 p-4 border-l border-gray-500">
                Over 3 years of development experience in building web apps with
                HTML, CSS, JS, React and NextJS.
              </span>
              <span className="text-gray-500">&lt;/h3&gt;</span>
            </p>
          </div>
        </div>
        <div className="border border-primary p-8 flex flex-col gap-4">
          <div className="flex gap-3">
            <TbBrandReactNative className="w-16 h-auto" />
            <h2 className="text-2xl leading-none font-bold">
              <span>Mobile App Development</span>
            </h2>
          </div>
          <div>
            <p className="flex flex-col">
              <span className="text-gray-500"> &lt;h3&gt; </span>
              <span className="ml-3 p-4 border-l border-gray-500">
                Familiarity with react-native framework for developing mobile
                app solutions.
              </span>
              <span className="text-gray-500">&lt;/h3&gt;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
