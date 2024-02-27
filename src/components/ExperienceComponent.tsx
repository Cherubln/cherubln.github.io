import { ExperienceType } from "../types/ExperienceType";

const ExperienceComponent = ({
  experience,
  expanded,
}: {
  experience: ExperienceType;
  expanded?: boolean;
}) => {
  return (
    <div className="collapse collapse-plus bg-base-200 rounded-md">
      <input type="radio" name="my-accordion-2" defaultChecked={expanded} />
      <div className="collapse-title text-xl font-medium">
        <div className="flex flex-col sm:flex-row sm:justify-between  text-sm sm:items-center">
          <div className="flex flex-col">
            <span className="font-bold text-primary">{experience.role}</span>
            <span className="text-xs font-extralight">
              {experience.company}
            </span>
          </div>
          <div>{experience.duration}</div>
        </div>
      </div>
      <div className="collapse-content flex flex-col sm:flex-row sm:justify-between gap-4 sm:items-center">
        <div className="flex order-2 sm:order-1">
          <div className="flex flex-col gap-4">
            <div className="flex gap-8">
              <span className="flex gap-1 items-center">
                <experience.location.Icon />
                {experience.location.name}
              </span>
              <span className="flex gap-2 items-center">
                <experience.website.Icon />
                <a
                  href={`http://${experience.website.name}/`}
                  target="_blank"
                  className="link hover:link-primary"
                >
                  {experience.website.name}
                </a>
              </span>
            </div>
            <p className="max-w-xl">{experience.description}</p>
            <div className="max-w-xl flex gap-3 flex-wrap">
              {experience.skills.map((skill) => (
                <span className="badge badge-info">{skill}</span>
              ))}
            </div>
          </div>
        </div>
        <img
          src={experience.logo}
          alt="andela logo"
          className="max-w-min rounded-badge order-1 sm:order-2"
        />
      </div>
    </div>
  );
};

export default ExperienceComponent;
