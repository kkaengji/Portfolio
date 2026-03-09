import { Skill } from "@/types"

export default function SkillItem({ skill }: { skill: Skill }) {
  return (
    <div className="skill-item">
      <div className="skill-name">{skill.name}</div>
      <div className="skill-bar">
        <div
          className={"skill-fill" + (skill.color ? " " + skill.color : "")}
          style={{ width: skill.level + "%" }}
        />
      </div>
      <div className="skill-level">{skill.label}</div>
    </div>
  )
}
