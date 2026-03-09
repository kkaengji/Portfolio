import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card">
      <div className="card-label">{project.label}</div>
      <div className="card-title">{project.title}</div>
      <div className="card-desc">{project.description}</div>
      <div className="card-tags">
        {project.tags.map((tag, index) => (
          <span key={index} className={`tag ${tag.variant || ""}`}>
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
}
