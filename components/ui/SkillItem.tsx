import { Skill } from "@/types";

interface SkillItemProps {
  skill: Skill;
}

export default function SkillItem({ skill }: SkillItemProps) {
  return (
    <div className="skill-item">
      <div className="skill-name">{skill.name}</div>
      <div className="skill-bar">
        <div
          className={`skill-fill ${skill.variant || ""}`}
          style={{ width: `${skill.percentage}%` }}
        />
      </div>
      <div className="skill-level">{skill.level}</div>
    </div>
  );
}
