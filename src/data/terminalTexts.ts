import { author } from "@/data/author";

export const HELP_TEXT = `사용 가능한 커맨드:
  help              이 도움말 표시
  whoami            개발자 정보
  ls projects       프로젝트 목록
  open <번호>        프로젝트 상세보기 (예: open 1)
  cat skills        스킬 목록
  cat about         소개
  contact           연락처
  clear             터미널 초기화
  theme             다크/라이트 모드 전환`;

export const WHOAMI_TEXT = `${author.name} (${author.terminalUser})
역할:    Frontend Developer (Fullstack 지향)
경력:    C# / ASP.NET 4년 8개월
현재:    React · Next.js · TypeScript 학습 중
상태:    구직 중 ✓`;

export const SKILLS_TEXT = `Frontend:  React      ████████░░  80%
           Next.js    ████████░░  80%
           TypeScript ███████░░░  75%
           HTML/CSS   █████████░  90%

Backend:   C#/ASP.NET █████████░  90%  (실무 4.8년)
           MSSQL      ████████░░  85%
           Spring Boot███░░░░░░░  30%`;

export const ABOUT_TEXT = `C# / ASP.NET으로 4년 8개월간 실무를 경험하며
프론트부터 백엔드까지 구분 없이 개발했습니다.

직접 사용자 화면을 만들고 반응을 볼 때 가장
재미있다는 걸 깨닫고 프론트엔드로 방향을 잡았습니다.

백엔드 경험이 있어 API 구조와 DB 흐름을
이해하는 프론트엔드 개발이 강점입니다.`;

export const CONTACT_TEXT = `Email:    ${author.email}
GitHub:   ${author.github.replace("https://", "")}
Velog:    ${author.velog.replace("https://", "")}
Resume:   ${author.resume}`;
