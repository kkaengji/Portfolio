import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <SectionHeader command="ls projects/" title="Projects" />
      <div className="cards">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
