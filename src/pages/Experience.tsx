import experienceSet from "../constants/experience-set";
import ExperienceComponent from "../components/ExperienceComponent";

const ExperienceSection = () => {
  return (
    <div id="Experience" className="py-14">
      <h2 className="text-3xl md:text-5xl font-bold  text-center my-8">
        Experience
      </h2>
      <div className="flex flex-col gap-4">
        {experienceSet.map((experience, id) => {
          return (
            <ExperienceComponent
              key={id}
              experience={experience}
              expanded={id === 0}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceSection;
