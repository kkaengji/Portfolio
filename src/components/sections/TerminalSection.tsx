'use client'

import { useState } from 'react'
import { projects } from '@/data/projects'
import { Project } from '@/types'
import SectionHeader from '@/components/ui/SectionHeader'
import InteractiveTerminal from '@/components/terminal/InteractiveTerminal'
import ProjectModal from '@/components/ui/ProjectModal'

export default function TerminalSection() {
  const [selected, setSelected] = useState<Project | null>(null)

  const handleOpenProject = (id: number) => {
    const p = projects.find(p => p.id === id)
    if (p) setSelected(p)
  }

  return (
    <section id="terminal" className="section">
      <SectionHeader cmd="$ bash terminal.sh" title="Interactive" />
      <div className="terminal-window">
        <div className="terminal-bar">
          <span className="dot dot-r" />
          <span className="dot dot-y" />
          <span className="dot dot-g" />
          <span className="terminal-title">zsh — interactive — 80×20</span>
        </div>
        <InteractiveTerminal onOpenProject={handleOpenProject} />
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
