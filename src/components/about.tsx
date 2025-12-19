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
              안녕하세요! 저는 사용자 경험을 최우선으로 생각하는 웹 개발자입니다. 프론트엔드 기술을 중심으로 하지만,
              풀스택 개발 경험도 있습니다.
            </p>

            <p className="text-foreground/80 text-lg leading-relaxed">
              웹 개발 경력 4년 8개월 동안 ASP.NET 기반 QMS 시스템 웹 버전을 구축·운영하며, 실사용자를 고려한 화면 개발과
              유지보수 경험을 쌓아왔습니다. 백엔드 중심의 환경에서 시작했지만, 현재는 React, Next.js, TypeScript 기반의
              프론트엔드 개발 역량을 확장하며, 기존 웹 시스템 실무 경험을 바탕으로 안정성과 사용자 경험을 함께 고려하는
              개발자로 성장하고 있습니다.
            </p>

            <p className="text-foreground/80 text-lg leading-relaxed">
              문제 해결을 좋아하고, 새로운 기술을 배우는 것에 열정적입니다. 팀과 협업하며 함께 성장하는 것을 추구합니다.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border-l-2 border-accent pl-4">
                <p className="text-accent text-sm font-semibold">위치</p>
                <p className="text-foreground/80">서울, 대한민국</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <p className="text-accent text-sm font-semibold">경력</p>
                <p className="text-foreground/80">4+ 년</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-background rounded-lg p-6 border border-border">
              <div className="text-3xl font-bold text-accent mb-2">4y+</div>
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
