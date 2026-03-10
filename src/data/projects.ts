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
    demo: "https://www.youtube.com/watch?v=dM07anPjfsk",
  },
  {
    id: 2,
    label: "02 · 티켓팅 플랫폼",
    title: "URR | 우르르",
    description:
      "K-POP 팬덤을 위한 통합 플랫폼. 공정한 티켓 예매, 공식 양도 시스템, 팬 커뮤니티를 하나의 생태계로 연결합니다.",
    overview:
      "K-POP 팬덤을 위한 통합 플랫폼으로 티켓 예매, 티켓 양도, 팬 커뮤니티를 하나의 생태계로 연결하는 서비스입니다. 기존 티켓팅 시장의 매크로와 리셀러 문제를 멤버십 기반 등급 시스템, 대기열 관리, VQA(Visual Question Answering) 인증, 공식 양도 시스템으로 해결하여 찐팬 중심의 공정한 구조를 구축합니다. 특히 공연 예매 시 대규모 트래픽 환경을 고려한 Queue 기반 시스템으로 공정성과 안정성을 확보합니다.",
    role: "프론트엔드 개발\nNext.js 기반 웹 서비스 개발 · 티켓팅 및 대기열 UI 구현 · API 연동 · 상태 관리",
    period: "2026.02 ~ 진행 중",
    features: [
      "공연 목록 및 상세 페이지 · 티켓 예매 및 사용자 티켓 관리",
      "Queue 기반 대기열 시스템 · 사용자 순번 상태 표시 UI",
      "VQA 기반 매크로 방지 인증 절차 통합",
      "멤버십 등급 기반 팬 활동 차등 기능 제공",
      "팬 게시글/댓글 작성 · 멤버십 기반 커뮤니티",
    ],
    trouble:
      "좌석 중복 예매 문제 → 좌석 선택 시 실시간 상태 API 조회, 선택 좌석 UI 즉시 disabled 처리, 결제 전 좌석 상태 재검증 API를 통한 이중 검증 구조로 중복 예매 가능성 최소화",
    images: [
      { src: "/urr-1.png", alt: "홈 화면" },
      { src: "/urr-2.png", alt: "티켓 예매 페이지" },
      { src: "/urr-3.png", alt: "대기열 시스템" },
      { src: "/urr-4.png", alt: "팬 커뮤니티" },
    ],
    tags: [
      { name: "Next.js 14", color: "blue" },
      { name: "TypeScript", color: "blue" },
      { name: "TanStack Query" },
      { name: "Tailwind CSS", color: "cyan" },
      { name: "Shadcn/ui" },
      { name: "Spring Boot", color: "green" },
      { name: "AWS" },
    ],
  },
  {
    id: 3,
    label: "03 · 준비중",
    title: "준비중",
    description: "다음 프로젝트를 정리 중입니다. 곧 업데이트할 예정입니다.",
    overview:
      "현재 프로젝트 내용을 정리하고 있습니다. 완료되면 상세 내용과 링크를 추가할 예정입니다.",
    tags: [{ name: "Coming Soon", color: "default" }],
  },
  {
    id: 4,
    label: "04 · 기업 솔루션",
    title: "QMS(Quality Management System) 웹 시스템 구축",
    description:
      "제조 기업의 품질 관리를 위한 QMS 웹 솔루션. 기업별 요구사항에 맞게 커스터마이징하여 운영 시스템을 구축했습니다.",
    overview:
      "제조 기업의 품질 관리 데이터를 관리하는 QMS(Quality Management System) 웹 솔루션을 기업별 요구사항에 맞게 구축 및 커스터마이징한 프로젝트입니다. 기존 솔루션을 기반으로 신규 고객사의 업무 프로세스에 맞춰 화면, 데이터 구조, 기능을 수정하여 운영 시스템을 구축했습니다. 주요 고객사로는 LS전선, LT메탈, TES, 퓨트로닉, 고려전자, SK넥실리스, 남해화학, 모트렉스 등이 있습니다.",
    role: "풀스택 개발\nASP.NET 기반 QMS 웹 시스템 개발에 참여하여 프론트엔드, 백엔드, DB 설계 전반을 담당",
    period: "2020 – 2025 (4년 8개월)",
    features: [
      "QMS 웹 시스템 화면 개발 (C# ASP.NET - HTML5, CSS, JavaScript, jQuery, MSSQL)",
      "기업별 업무 프로세스에 맞춘 기능 커스터마이징",
      "MS SQL Server 테이블 설계 및 Stored Procedure 개발",
      "파일 업로드 및 문서 관리 기능 구현",
      "다국어 지원 기능 개발 및 데이터 검증/보안 처리(XSS 방어)",
    ],
    trouble:
      "XSS 공격 취약점 → 사용자 입력값 HTML escape 처리 + 서버단 validation 로직 추가로 보안 강화",
    tags: [
      { name: "C#" },
      { name: "ASP.NET" },
      { name: "HTML/CSS/JavaScript" },
      { name: "jQuery" },
      { name: "MS SQL Server" },
    ],
  },
];
