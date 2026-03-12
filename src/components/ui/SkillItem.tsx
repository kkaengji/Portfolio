import { Skill } from "@/types";

export default function SkillItem({ skill }: { skill: Skill }) {
  return (
    <div className="skill-item">
      <div className="skill-name">{skill.name}</div>
    </div>
  );
}
