import skillSet from "../constants/skill-set";
import SkillComponent from "../components/SkillComponent";

const Skills = () => {
  return (
    <div id="Skills" className="py-14">
      <h2 className="text-3xl md:text-5xl font-bold  text-center my-8">
        Expertise
      </h2>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0">
        {skillSet.map((skill) => {
          return (
            <SkillComponent
              Icon={skill.Icon}
              heading={skill.heading}
              content={skill.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
