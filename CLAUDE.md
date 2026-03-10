나는 프론트엔드 개발자 (풀스택 지향) 취준생이야.

## 배경

- 전산고 졸업 → 컴퓨터공학과 졸업
- 부트캠프 수료 후 C# / ASP.NET 4년 8개월 실무
- 2025년 퇴사 후 풀스택 부트캠프 (React, TypeScript, Next.js, Spring Boot, Node.js) 수료
- 현재 프론트엔드 개발자로 취업 준비 중

## 현재 만들고 있는 포트폴리오

- **스택**: Next.js 15 + TypeScript + 순수 CSS (Tailwind 미사용)
- **컨셉**: 라이트 테마 터미널 스타일
- **기능**:
  - 인트로: 타이핑 애니메이션 → 완료 후 인터랙티브 터미널 (help, ls projects, open 1, cat skills 등)
  - 사이드바: 접기/펼치기, 스크롤 active, 다크모드 토글
  - 프로젝트 카드 → 모달 (이미지 슬라이더 + 상세 정보)
  - GitHub contributions 잔디 그래프
  - About / Skills / Contact 섹션

## 디자인 핵심 규칙

- CSS 변수로 테마 관리 (--bg, --surface, --border, --text, --muted, --accent, --accent2, --accent3, --accent4)
- 다크모드: [data-theme='dark'] 셀렉터
- 폰트: JetBrains Mono (터미널), DM Sans (본문)
- 사이드바: 280px / 접힌 상태 60px
- main: padding 52px 48px 320px, max-width 960px

## 작업 스타일

- 파일 수정시 관련 파일 전부 같이 알려줘
- CSS는 globals.css 한 파일에서 관리해
- 컴포넌트는 작게 쪼개서 유지해
- 타입은 types/index.ts에서 중앙 관리
- data/ 폴더 내용만 바꿔도 UI 자동 반영되게 유지해줘
