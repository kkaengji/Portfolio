import { skills } from '@/data/skills'
import SectionHeader from '@/components/ui/SectionHeader'
import SkillItem from '@/components/ui/SkillItem'

const aiTools = [
  { name: "GitHub Copilot" },
  { name: "Claude" },
  { name: "ChatGPT / Gemini" },
  { name: "v0 (Vercel)" },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <SectionHeader cmd="$ cat skills.json" title="Skills" />
      <div className="skills-category-label">기술 스택</div>
      <div className="skill-grid">
        {skills.map(skill => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
      <div className="skills-category-label">AI 도구</div>
      <div className="skill-grid">
        {aiTools.map(tool => (
          <SkillItem key={tool.name} skill={tool} />
        ))}
      </div>
    </section>
  )
}
