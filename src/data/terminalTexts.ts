import { author } from "@/data/author";

export const MENU_TEXT = `포트폴리오 터미널 v1.0.0

  [1] whoami     개발자 정보
  [2] projects   프로젝트 목록
  [3] skills     기술 스택
  [4] about      소개
  [5] contact    연락처
  [6] theme      다크/라이트 전환

숫자 또는 커맨드를 입력하세요`;

export const HELP_TEXT = MENU_TEXT;

export const WHOAMI_TEXT = `${author.name} (${author.terminalUser})
역할:    Frontend Developer (Fullstack 지향)
경력:    C# ASP.NET 4년 8개월
현재:    React · Next.js · TypeScript
상태:    구직 중 ✓`;

export const SKILLS_TEXT = `Frontend:   React / Next.js
            TypeScript
            HTML / CSS

Backend:    C# / ASP.NET  (실무 4년 8개월)
            MSSQL / MySQL

기타:       Spring Boot
            Copilot · Claude · v0`;

export const ABOUT_TEXT = `C# / ASP.NET으로 4년 8개월간 DB 설계·SP 작성부터
화면 구현까지 전체 흐름을 직접 다뤘습니다.

그 경험 위에서 화면을 만들 때 가장 재미있다는 걸
깨닫고 프론트엔드 개발자로 방향을 잡았습니다.

DB~화면 전체를 이해하는 프론트엔드가 강점입니다.`;

export const CONTACT_TEXT = `Email:    ${author.email}
GitHub:   ${author.github.replace("https://", "")}
Velog:    ${author.velog.replace("https://", "")}
Resume:   ${author.resume}`;
