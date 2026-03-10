import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    label: "01 · 경매 플랫폼",
    title: "Blind Chicken Market",
    description:
      "익명 기반 실시간 중고 경매 플랫폼. 상품 등록부터 경매, 낙찰, 결제까지 전체 거래 흐름을 구현.",
    overview:
      "기존 중고거래 시장의 가격 경쟁 부족, 거래 경험의 단조로움, 판매자·구매자 간 비공개 협상에서 발생하는 공정성 문제를 해결하기 위해 만든 익명 기반 실시간 중고 경매 플랫폼입니다. 사용자는 닉네임 기반으로 상품을 등록하고, 실시간 경매에 참여하거나 즉시 구매할 수 있으며, 경매 종료 후 낙찰·결제까지 이어지는 거래 흐름을 제공합니다.",
    role: "유저 웹사이트 프론트엔드 담당\n사용자 흐름 설계 · UI/UX · 인증/권한 처리",
    period: "2025.10.31 – 2026.01.02 (2개월)",
    features: [
      "닉네임 기반 회원가입/로그인 및 인증 기능",
      "상품 등록·수정·조회 및 CRUD 기능",
      "WebSocket(STOMP) 기반 실시간 경매 입찰",
      "낙찰 후 주문·결제 페이지 및 결제 시스템 연동",
      "주문 조회·정렬·페이징·반응형 UI",
    ],
    trouble:
      "결제 페이지 비인가 접근(IDOR) 방지 → 페이지 진입 시 주문 조회 API 필수 호출, 서버 403 응답 감지 후 리다이렉트하는 이중 방어 구조 적용",
    images: [
      { src: "/bcm-1.png", alt: "홈 화면(경매목록)" },
      { src: "/bcm-2.png", alt: "실시간 입찰 화면" },
      { src: "/bcm-3.png", alt: "결제 페이지" },
      { src: "/bcm-4.png", alt: "마이 페이지" },
    ],
    tags: [
      { name: "TypeScript", color: "blue" },
      { name: "Next.js", color: "blue" },
      { name: "WebSocket" },
      { name: "Tailwind CSS", color: "cyan" },
      { name: "shadcn/ui" },
    ],
    github: "https://github.com/kt-merge/bcm-front-repository",
  },
  {
    id: 2,
    label: "02 · 풀스택",
    title: "프로젝트 이름 B",
    description:
      "풀스택으로 구성된 프로젝트. 프론트부터 백엔드까지 혼자 설계하고 구현했습니다.",
    overview:
      "풀스택 프로젝트 상세 개요입니다. 백엔드 설계부터 프론트엔드 구현까지 전 과정을 직접 담당했습니다.",
    role: "풀스택 개발 (프론트 70% / 백엔드 30%)",
    period: "2025.01 – 2025.03 (3개월)",
    features: [
      "REST API 설계 · Spring Boot",
      "React Query로 서버 상태 관리",
      "PostgreSQL 스키마 설계",
      "Vercel + Railway 배포",
    ],
    trouble: "N+1 쿼리 문제 → JPA fetch join으로 최적화",
    images: [
      { src: "/images/project-b-1.png", alt: "대시보드" },
      { src: "/images/project-b-2.png", alt: "API 구조도" },
    ],
    tags: [
      { name: "Next.js", color: "blue" },
      { name: "Spring Boot", color: "green" },
      { name: "PostgreSQL" },
    ],
    github: "https://github.com/yourname/project-b",
  },
  {
    id: 3,
    label: "03 · 클론",
    title: "프로젝트 이름 C",
    description:
      "특정 서비스를 클론하며 핵심 기능을 직접 구현해본 프로젝트입니다.",
    overview:
      "클론 프로젝트 상세 개요. 어떤 서비스를 왜 클론했는지 설명하세요.",
    role: "프론트엔드 · 백엔드 전담",
    period: "2024.08 – 2024.09 (6주)",
    features: ["소셜 로그인 (OAuth2)", "드래그 앤 드롭 UI", "WebSocket 채팅"],
    tags: [
      { name: "React", color: "blue" },
      { name: "Node.js", color: "green" },
      { name: "MongoDB" },
    ],
    github: "https://github.com/yourname/project-c",
    demo: "https://project-c.vercel.app",
  },
  {
    id: 4,
    label: "04 · 실무",
    title: "ASP.NET 시절 작업",
    description:
      "C# 재직 당시 맡았던 주요 작업. 레거시 리팩토링 및 성능 개선 경험.",
    overview:
      "4년 8개월 재직하며 담당했던 주요 업무. 레거시 코드 리팩토링과 성능 최적화 작업을 중점적으로 맡았습니다.",
    role: "풀스택 개발 (C# · ASP.NET · SQL Server)",
    period: "2020 – 2024 (4년 8개월)",
    features: [
      "레거시 ASP.NET WebForms → MVC 마이그레이션",
      "SQL 쿼리 튜닝으로 페이지 로딩 40% 개선",
      "사내 공통 컴포넌트 라이브러리 구축",
    ],
    trouble: "WebForms ViewState 비대화 → 부분 MVC 전환으로 해결",
    tags: [{ name: "C#" }, { name: "ASP.NET" }, { name: "SQL Server" }],
  },
];
