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
              안녕하세요! 저는 사용자 경험을 최우선으로 생각하는 웹
              개발자입니다. 프론트엔드 기술을 중심으로 하지만, 풀스택 개발
              경험도 있습니다.
            </p>

            <p className="text-foreground/80 text-lg leading-relaxed">
              React와 Next.js로 빠르고 반응성 높은 웹 애플리케이션을 개발합니다.
              TypeScript를 사용하여 타입 안전성을 확보하고, 아름다운 UI/UX
              디자인을 구현합니다.
            </p>

            <p className="text-foreground/80 text-lg leading-relaxed">
              문제 해결을 좋아하고, 새로운 기술을 배우는 것에 열정적입니다. 팀과
              협업하며 함께 성장하는 것을 추구합니다.
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
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <p className="text-foreground/70">완료한 프로젝트</p>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border">
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <p className="text-foreground/70">협업 클라이언트</p>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <p className="text-foreground/70">만족도</p>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <p className="text-foreground/70">지원 서비스</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
