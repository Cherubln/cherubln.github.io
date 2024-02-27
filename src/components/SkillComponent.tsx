import type { SkillType } from "../types/SkillType";

const SkillComponent = ({ skill }: { skill: SkillType }) => {
  return (
    <div className="border border-primary p-8 flex flex-col gap-4">
      <div className="flex gap-3">
        <skill.Icon className="w-16 h-auto" />
        <h2 className="text-2xl leading-none font-bold">
          <span>{skill.heading}</span>
        </h2>
      </div>
      <div>
        <p className="flex flex-col">
          <span className="text-gray-500"> &lt;h3&gt; </span>
          <span className="ml-3 p-4 border-l border-gray-500">
            {skill.content}
          </span>
          <span className="text-gray-500">&lt;/h3&gt;</span>
        </p>
      </div>
    </div>
  );
};

export default SkillComponent;