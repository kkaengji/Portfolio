'use client'

import { useState } from 'react'
import { projects } from '@/data/projects'
import { Project } from '@/types'
import SectionHeader from '@/components/ui/SectionHeader'
import ProjectCard from '@/components/ui/ProjectCard'
import ProjectModal from '@/components/ui/ProjectModal'

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="section">
      <SectionHeader cmd="$ ls projects/" title="Projects" />
      <div className="cards-grid">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={setSelected}
          />
        ))}
      </div>

      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
}
