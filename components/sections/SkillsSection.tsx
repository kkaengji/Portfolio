import { skills } from '@/data/skills'
import SectionHeader from '@/components/ui/SectionHeader'
import SkillItem from '@/components/ui/SkillItem'

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <SectionHeader cmd="$ cat skills.json" title="Skills" />
      <div className="skill-grid">
        {skills.map(skill => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  )
}
