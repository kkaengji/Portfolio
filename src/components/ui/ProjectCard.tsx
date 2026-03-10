"use client";

import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      className="card"
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      aria-label={`${project.title} 프로젝트 상세보기`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(project);
        }
      }}
    >
      <div className="card-label">{project.label}</div>
      <div className="card-title">{project.title}</div>
      <div className="card-desc">{project.description}</div>
      <div className="card-tags">
        {project.tags.map((tag) => (
          <span
            key={tag.name}
            className={"tag" + (tag.color ? " " + tag.color : "")}
          >
            {tag.name}
          </span>
        ))}
      </div>
      {(project.github || project.demo || project.video) && (
        <div className="card-links" onClick={(e) => e.stopPropagation()}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              GitHub ↗
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link accent"
            >
              Demo ↗
            </a>
          )}
          {project.video && (
            <a
              href={project.video}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Video ▶
            </a>
          )}
        </div>
      )}
      <div className="card-hint">클릭하여 상세보기</div>
    </div>
  );
}
