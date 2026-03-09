import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "01",
    label: "01 · 웹 앱",
    title: "프로젝트 이름 A",
    description: "짧은 설명이 들어갑니다. 어떤 문제를 해결했는지 한두 줄로.",
    tags: [
      { name: "React", variant: "blue" },
      { name: "TypeScript", variant: "blue" },
      { name: "Next.js" },
    ],
  },
  {
    id: "02",
    label: "02 · 풀스택",
    title: "프로젝트 이름 B",
    description: "짧은 설명이 들어갑니다. 어떤 문제를 해결했는지 한두 줄로.",
    tags: [
      { name: "Next.js", variant: "blue" },
      { name: "Spring Boot", variant: "green" },
      { name: "PostgreSQL" },
    ],
  },
  {
    id: "03",
    label: "03 · 클론",
    title: "프로젝트 이름 C",
    description: "짧은 설명이 들어갑니다. 어떤 문제를 해결했는지 한두 줄로.",
    tags: [
      { name: "React", variant: "blue" },
      { name: "Node.js", variant: "green" },
      { name: "MongoDB" },
    ],
  },
  {
    id: "04",
    label: "04 · 실무",
    title: "ASP.NET 시절 작업",
    description:
      "C# 재직 당시 맡았던 주요 작업. 레거시 리팩토링, 성능 개선 등.",
    tags: [{ name: "C#" }, { name: "ASP.NET" }, { name: "SQL Server" }],
  },
];
