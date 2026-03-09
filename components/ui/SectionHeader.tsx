interface SectionHeaderProps {
  cmd: string
  title: string
}

export default function SectionHeader({ cmd, title }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <span className="section-cmd">{cmd}</span>
      <h2 className="section-title">{title}</h2>
    </div>
  )
}
