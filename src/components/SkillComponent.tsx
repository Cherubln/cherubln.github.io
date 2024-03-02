import type { SkillType } from "../types/SkillType";

const SkillComponent = ({ skill }: { skill: SkillType }) => {
  return (
    <div className="join-item border border-primary p-8 flex flex-col gap-4">
      <div className="flex gap-5 items-center">
        <skill.Icon className="w-16 h-auto" />
        <h2 className="text-2xl leading-none font-bold">
          <span>{skill.heading}</span>
        </h2>
      </div>
      <div>
        <p className="flex flex-col">
          <span className="text-neutral-content/30"> &lt;h3&gt; </span>
          <span className="ml-3 p-4 border-l border-neutral-content/30">
            {skill.content}
          </span>
          <span className="text-neutral-content/30">&lt;/h3&gt;</span>
        </p>
      </div>
    </div>
  );
};

export default SkillComponent;
