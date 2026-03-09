import SectionHeader from "../ui/SectionHeader";
import SkillItem from "../ui/SkillItem";
import { skills } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <SectionHeader command="cat skills.json" title="Skills" />
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}
