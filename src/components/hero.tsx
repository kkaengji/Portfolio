import type React from "react";
import Link from "next/link";
import { ArrowRight, Github, Mail } from "lucide-react";

export function Hero(): React.ReactNode {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px] -z-10 opacity-50" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6">
          {/* Greeting */}
          <p className="text-accent text-lg">안녕하세요 👋</p>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            프론트엔드 개발자 남경진입니다
          </h1>

          {/* Subtitle */}
          {/* prettier-ignore */}
          <p className="text-xl text-foreground/70 max-w-4xl mx-aut o">
            웹 시스템 구축 실무 경험을 바탕으로 <br />
            빠르게 변화하는 프론트엔드 환경에 유연하게 대응합니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="#projects"
              className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              프로젝트 보기 <ArrowRight size={18} />
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
            >
              연락하기
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-8">
            <a
              href="https://github.com/kkaengji"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:nkj960425@naver.com"
              className="text-foreground/60 hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-accent text-sm">스크롤 아래로</div>
      </div>
    </section>
  );
}
