interface SectionHeaderProps {
  command: string;
  title: string;
}

export default function SectionHeader({ command, title }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <span className="section-cmd">$ {command}</span>
      <span className="section-title">{title}</span>
    </div>
  );
}
