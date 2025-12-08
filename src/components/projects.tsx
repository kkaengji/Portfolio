import type React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export function Projects(): React.ReactNode {
  const projects: Project[] = [
    {
      id: 1,
      title: "중고거래 경매 플랫폼_다리우스",
      description: "Next.js와 TypeScript를 이용한 완전한 전자상거래 솔루션",
      image: "/mainhome.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://www.ktdarius.shop/",
      githubUrl: "https://github.com/KT-Darius/blind-chicken-market",
    },
    {
      id: 2,
      title: "중고거래 경매 플랫폼_머지",
      description: "기존의 프로젝트를 이용한 고도화 + 관리자페이지 구현",
      image: "/mainhome.png",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://www.ktdarius.shop/",
      githubUrl: "https://github.com/kt-merge",
    },
    {
      id: 3,
      title: "준비중",
      description: "",
      image: "/project-management-tool.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "",
      githubUrl: "",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">프로젝트</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-colors"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-muted h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground/70 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-accent/10 text-accent rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-border">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-semibold"
                  >
                    보기 <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors text-sm font-semibold"
                  >
                    코드 <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
