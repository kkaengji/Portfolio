import type React from "react";
export function About(): React.ReactNode {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">소개</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-foreground/80 text-lg leading-relaxed">
              서비스 흐름과 사용자 경험을 기준으로 개발하는 프론트엔드 개발자입니다. 화면 구현에 그치지 않고, 실제로
              사용되는 서비스의 구조와 흐름을 함께 고민합니다.
            </p>

            <p className="text-foreground/80 text-lg leading-relaxed">
              ASP.NET 기반 웹 솔루션을 약 4년 8개월간 개발·운영하며, 실사용자를 고려한 화면 구성과 유지보수 경험을
              쌓아왔습니다. 현재는 Next.js와 TypeScript를 중심으로 프론트엔드 영역에 집중하며, 기존 실무 경험을 바탕으로
              안정성과 확장성을 함께 고려한 개발을 지향하고 있습니다.
            </p>

            <p className="text-foreground/80 text-lg leading-relaxed">
              최근에는 하나의 서비스를 새로 만드는 것보다, 이미 동작하는 프로젝트를 고도화하며 사용자 경험과 구조를
              개선하는 데 더 많은 가치를 두고 있습니다.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border-l-2 border-accent pl-4">
                <p className="text-accent text-sm font-semibold">위치</p>
                <p className="text-foreground/80">서울, 대한민국</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <p className="text-accent text-sm font-semibold">경력</p>
                <p className="text-foreground/80">4년</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-background rounded-lg p-6 border border-border">
              <div className="text-3xl font-bold text-accent mb-2">4+</div>
              <p className="text-foreground/70">웹 개발 실무 경력</p>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border">
              <div className="text-3xl font-bold text-accent mb-2">AI</div>
              <p className="text-foreground/70">개발 생산성 향상 도구</p>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border">
              <div className="text-3xl font-bold text-accent mb-2">FE</div>
              <p className="text-foreground/70">React · Next.js · TS</p>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border">
              <div className="text-3xl font-bold text-accent mb-2">QMS</div>
              <p className="text-foreground/70">엔터프라이즈 도메인 경험</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
