import GitHubContrib from '@/components/ui/GitHubContrib'
import SectionHeader from '@/components/ui/SectionHeader'

export default function GitHubSection() {
  return (
    <section id="github" className="section">
      <SectionHeader cmd="$ cat github.log" title="GitHub" />
      <div className="terminal-window">
        <div className="terminal-bar">
          <span className="dot dot-r" />
          <span className="dot dot-y" />
          <span className="dot dot-g" />
          <span className="terminal-title">github contributions</span>
        </div>
        <div className="terminal-body">
          <GitHubContrib username="yourname" />
        </div>
      </div>
    </section>
  )
}
