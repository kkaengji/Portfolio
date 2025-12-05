export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "JavaScript",
        "C# ASP.NET",
        "HTML5",
      ],
    },
    {
      category: "Backend",
      skills: ["Spring Boot", "REST API", "Node.js", "JWT"],
    },
    {
      category: "데이터베이스",
      skills: ["MySQL", "MSSQL"],
    },
    {
      category: "도구",
      skills: ["Git", "Notion", "Postman", "Vercel"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">기술 스택</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-xl font-semibold text-accent">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border hover:border-accent transition-colors cursor-default"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
