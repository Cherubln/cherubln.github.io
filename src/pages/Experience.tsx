import { ImLocation2 } from "react-icons/im";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import andelaLogo from "../assets/andela_logo.jpg";
import heptaLogo from "../assets/heptanalytics_logo.jpg";
import uplusLogo from "../assets/uplus_mutual_partners_logo.jpg";

const ExperienceSection = () => {
  return (
    <div id="Experience" className="py-14">
      <h2 className="text-3xl md:text-5xl font-bold  text-center my-8">
        Experience
      </h2>
      <div className="flex flex-col gap-4">
        {/* uplus */}
        <div className="collapse collapse-plus bg-base-200 rounded-md">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            <div className="flex flex-col sm:flex-row sm:justify-between  text-sm sm:items-center">
              <div className="flex flex-col">
                <span className="font-bold text-primary">
                  Front-End Developer
                </span>
                <span className="text-xs font-extralight">
                  Uplus Mutual Partners
                </span>
              </div>
              <div>2022 - Present</div>
            </div>
          </div>
          <div className="collapse-content flex flex-col sm:flex-row sm:justify-between gap-4 sm:items-center">
            <div className="flex order-2 sm:order-1">
              <div className="flex flex-col gap-4">
                <div className="flex gap-8">
                  <span className="flex gap-1 items-center">
                    <ImLocation2 />
                    Hybrid
                  </span>
                  <span className="flex gap-2 items-center">
                    <BsArrowUpRightSquareFill />
                    <a
                      href="http://uplus.rw"
                      target="_blank"
                      className="link hover:link-primary"
                    >
                      uplus.rw
                    </a>
                  </span>
                </div>
                <p>
                  Developing and maintaining front-end solutions for web
                  applications, particularly in the fintech domain. This
                  involves creating client and internal data visualization
                  components using React/TypeScript and the Tailwind CSS
                  framework.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <span className="badge badge-info">JavaScript</span>
                  <span className="badge badge-info">TypeScript</span>
                  <span className="badge badge-info">React</span>
                  <span className="badge badge-info">Redux</span>
                  <span className="badge badge-info">Tailwindcss</span>
                </div>
              </div>
            </div>
            <img
              src={uplusLogo}
              alt="uplus logo"
              className="max-w-min rounded-badge order-1 sm:order-2"
            />
          </div>
        </div>
        {/* hepta */}
        <div className="collapse collapse-plus bg-base-200 rounded-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            <div className="flex flex-col sm:flex-row sm:justify-between  text-sm sm:items-center">
              <div className="flex flex-col">
                <span className="font-bold text-primary">
                  Software Developer
                </span>
                <span className="text-xs font-extralight">Hepta Analytics</span>
              </div>
              <div>Jan 2021 - May 2021</div>
            </div>
          </div>
          <div className="collapse-content flex flex-col sm:flex-row sm:justify-between gap-4 sm:items-center">
            <div className="flex order-2 sm:order-1">
              <div className="flex flex-col gap-4">
                <div className="flex gap-8">
                  <span className="flex gap-1 items-center">
                    <ImLocation2 />
                    Remote
                  </span>
                  <span className="flex gap-2 items-center">
                    <BsArrowUpRightSquareFill />
                    <a
                      href="http://heptanalytics.com/"
                      target="_blank"
                      className="link hover:link-primary"
                    >
                      heptanalytics.com
                    </a>
                  </span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Harum, est!
                </p>
                <div className="flex gap-3 flex-wrap">
                  <span className="badge badge-info">JavaScript</span>
                  <span className="badge badge-info">React</span>
                  <span className="badge badge-info">Python</span>
                  <span className="badge badge-info">Redux</span>
                  <span className="badge badge-info">Vue</span>
                </div>
              </div>
            </div>
            <img
              src={heptaLogo}
              alt="hepta logo"
              className="max-w-min rounded-badge order-1 sm:order-2"
            />
          </div>
        </div>
        {/* andela */}
        <div className="collapse collapse-plus bg-base-200 rounded-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            <div className="flex flex-col sm:flex-row sm:justify-between  text-sm sm:items-center">
              <div className="flex flex-col">
                <span className="font-bold text-primary">
                  Software Engineer
                </span>
                <span className="text-xs font-extralight">Andela</span>
              </div>
              <div>2020 - 2021</div>
            </div>
          </div>
          <div className="collapse-content flex flex-col sm:flex-row sm:justify-between gap-4 sm:items-center">
            <div className="flex order-2 sm:order-1">
              <div className="flex flex-col gap-4">
                <div className="flex gap-8">
                  <span className="flex gap-1 items-center">
                    <ImLocation2 />
                    Remote
                  </span>
                  <span className="flex gap-2 items-center">
                    <BsArrowUpRightSquareFill />
                    <a
                      href="http://andela.com/"
                      target="_blank"
                      className="link hover:link-primary"
                    >
                      andela.com
                    </a>
                  </span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Harum, est!
                </p>
                <div className="flex gap-3 flex-wrap">
                  <span className="badge badge-info">JavaScript</span>
                  <span className="badge badge-info">React</span>
                  <span className="badge badge-info">NodeJS</span>
                  <span className="badge badge-info">Postgress</span>
                  <span className="badge badge-info">MongoDB</span>
                  <span className="badge badge-info">FireBase</span>
                  <span className="badge badge-info">Redux</span>
                  <span className="badge badge-info">ExpressJS</span>
                  <span className="badge badge-info">HTML</span>
                  <span className="badge badge-info">CSS</span>
                </div>
              </div>
            </div>
            <img
              src={andelaLogo}
              alt="andela logo"
              className="max-w-min rounded-badge order-1 sm:order-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
