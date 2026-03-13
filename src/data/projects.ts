import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    label: "01 · 티켓팅 플랫폼 (In Progress)",
    title: "URR | 우르르",
    description:
      "K-POP 팬덤을 위한 통합 플랫폼.\n공정한 티켓 예매, 공식 양도 시스템, 팬 커뮤니티를 하나의 생태계로 연결합니다.",
    overview:
      "티켓팅은 단기간 트래픽이 폭발하는 구조라 '순번 공정성'과 'UI 안정성'을 동시에 확보하는 게 핵심 설계 과제입니다. 클라이언트가 순번을 직접 계산하면 조작 가능성이 생기므로, 순번 발급은 서버에서만 처리하고 클라이언트는 폴링으로 상태를 수신하는 단방향 구조로 분리할 계획입니다.\n\n잔여석처럼 빠르게 변하는 데이터는 Context API로는 캐시 무효화 타이밍 제어가 어렵기 때문에 TanStack Query로 관리하고, 좌석 선택 같은 단순 전역 상태는 Redux의 보일러플레이트 없이 Zustand로 처리할 예정입니다.\n\n매크로 방지는 단순 CAPTCHA 대신, K-POP 이미지 기반 의미 검증이 가능한 VQA 방식을 도입해 봇 우회 난이도를 높이는 방향으로 설계 중입니다.",
    role: "프론트엔드 개발\nNext.js 기반 웹 서비스 개발 · 티켓팅 및 대기열 UI 구현 · 상태 관리 설계",
    period: "2026.02 ~ 진행 중",
    features: [
      "Queue 기반 대기열 설계 — 순번 발급을 서버에서만 처리, 클라이언트는 폴링으로 상태 수신해 트래픽 집중 시 UI 안정성을 확보할 예정",
      "TanStack Query 서버 상태 관리 — 잔여석·티켓 상태 등 빠르게 변하는 데이터에 캐시 무효화 전략을 명시적으로 적용할 계획",
      "좌석 선택 이중 검증 구조 — 낙관적 UI 업데이트로 UX 확보, 결제 직전 서버 재검증으로 동시 선택 충돌을 최소화하는 구조로 설계 중",
      "VQA 기반 매크로 방지 — CAPTCHA 대비 K-POP 컨텍스트에서 의미 기반 검증으로 봇 차단 정확도를 높이는 방식 도입 예정",
      "멤버십 등급 기반 권한 제어 — 팬 활동 데이터 기준 차등 접근, 찐팬 중심의 공정한 구조로 설계 계획 중",
    ],
    trouble:
      "동시 좌석 선택 충돌 문제 → 서버에만 의존하면 응답 전까지 사용자가 같은 좌석을 중복 선택할 수 있음. 클라이언트에서 선택 즉시 낙관적으로 disabled 처리해 UX를 확보하고, 결제 직전 서버 재검증을 추가해 실제 충돌은 서버에서 최종 차단하는 이중 구조로 해결할 예정",
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
      { name: "Zustand" },
      { name: "Tailwind CSS", color: "cyan" },
      { name: "Shadcn/ui" },
    ],
    github: "https://github.com/KTCloud-TechUp/urr-frontend",
    demo: "https://urr-fin.vercel.app/",
  },
  {
    id: 2,
    label: "02 · 경매 플랫폼",
    title: "Blind Chicken Market",
    description:
      "익명 기반 실시간 중고 경매 플랫폼.\n상품 등록부터 경매, 낙찰, 결제까지 전체 거래 흐름을 구현.",
    overview:
      "실시간 입찰 구현 방식을 선택할 때 폴링·SSE·WebSocket을 검토했습니다. 폴링은 입찰이 몰리는 순간 지연이 발생하고, SSE는 서버→클라이언트 단방향이라 입찰 액션 전송에 별도 REST 호출이 필요해 구조가 복잡해집니다.\n\n입찰은 양방향 통신이 필요했으므로 WebSocket(STOMP)을 채택하고, 채널을 경매 ID 단위로 구독 분리해 무관한 경매 메시지가 브로드캐스트되지 않도록 설계했습니다.\n\n결제 페이지는 URL 직접 접근 시 서버 인증만으로는 IDOR 취약점이 생길 수 있어, 프론트엔드에서도 진입 시 주문 조회 API를 강제 호출해 권한을 1차 확인하는 이중 방어 구조를 적용했습니다.",
    role: "유저 웹사이트 프론트엔드 담당\n사용자 흐름 설계 · UI/UX · 인증/권한 처리",
    period: "2025.10.31 – 2026.01.02 (2개월)",
    features: [
      "WebSocket(STOMP) 실시간 입찰 — 폴링 대비 서버 부하·지연 제거, 경매 ID 기준 채널 구독으로 메시지 범위 제어",
      "IDOR 방어 이중 구조 — 결제 페이지 진입 시 주문 조회 API 강제 호출, 서버 403 감지 후 즉시 리다이렉트",
      "익명 기반 거래 흐름 — 닉네임 인증 체계로 신원 비공개, 가격 왜곡 없는 시장 구조 설계",
      "낙찰~결제 전체 흐름 설계 — 경매 종료 이벤트 수신부터 주문 생성, 결제 연동까지 단계별 상태 전이 구현",
      "주문 목록 정렬·페이징·반응형 처리 — 접근 환경에 따른 UI 조건부 렌더링",
      "v0로 UI 프로토타입 제작 후 Next.js로 전환 — 디자인 방향을 빠르게 확정하고 구현에 집중",
    ],
    trouble:
      "결제 페이지 IDOR 취약점 → 서버가 막아도 프론트가 잘못된 URL로 렌더링하면 정보 노출 가능. '서버 믿기'가 아닌 '프론트도 직접 검증'하는 원칙으로, 진입 시 주문 조회 API를 강제 호출해 권한 확인 후 403이면 즉시 리다이렉트하는 클라이언트 1차 방어 구조를 추가",
    images: [
      { src: "/bcm-1.png", alt: "홈 화면(경매목록)" },
      { src: "/bcm-2.png", alt: "실시간 입찰 화면" },
      { src: "/bcm-3.png", alt: "결제 페이지" },
      { src: "/bcm-4.png", alt: "마이 페이지" },
    ],
    tags: [
      { name: "Next.js", color: "blue" },
      { name: "TypeScript", color: "blue" },
      { name: "WebSocket" },
      { name: "Tailwind CSS", color: "cyan" },
      { name: "shadcn/ui" },
    ],
    github: "https://github.com/kt-merge/bcm-front-repository",
    video: "https://www.youtube.com/watch?v=dM07anPjfsk",
  },
  {
    id: 3,
    label: "03 · 기업 솔루션",
    title: "QMS(Quality Management System) 웹 시스템 구축",
    description:
      "제조 기업의 품질 관리를 위한 QMS 웹 솔루션.\n기업별 요구사항에 맞게 커스터마이징하여 운영 시스템을 구축했습니다.",
    overview:
      "PM·영업팀이 고객사별 기획서를 작성하면, 그걸 받아 실제 시스템으로 구현하는 역할이었습니다. 자동차·비료·전자·화학 등 산업군이 모두 달라 품질 관리 항목과 화면 구성이 고객사마다 크게 달랐고, 기존 솔루션에 없는 메뉴를 처음부터 새로 만드는 경우도 많았습니다.\n\n4년 8개월간 다양한 업종의 실제 운영 시스템을 반복적으로 구축하면서, 요구사항을 빠르게 파악하고 DB 설계부터 화면까지 혼자 끊김 없이 구현하는 감각을 익혔습니다.",
    role: "풀스택 개발\nASP.NET 기반 QMS 웹 시스템 개발에 참여하여 프론트엔드, 백엔드, DB 설계 전반을 담당",
    period: "2020 – 2025 (4년 8개월)",
    features: [
      "산업별 신규 메뉴 개발 — 자동차·비료·전자 등 업종마다 다른 품질 관리 항목을 기획서 기반으로 화면·DB·SP 전부 구현",
      "기존 솔루션 기능 확장 — 고객사 요구에 맞게 화면·로직·쿼리를 수정하고 운영 환경에 바로 반영",
      "MS SQL Server 테이블 설계 및 Stored Procedure 작성 — 업무 로직을 SP로 구현하고 화면과 연결",
      "파일 업로드 및 품질 문서 관리 — 버전·권한 관리를 포함한 문서 관리 기능 구현",
      "부서 간·협력사 결재 시스템 구현 — 사내 부서 간 및 외부 협력사 문서 상신·승인·반려 흐름 개발, 결재 이동·완료 시 담당자에게 자동 메일 알림 발송",
      "XSS 방어 — 사용자 입력값 HTML escape + 서버단 validation 이중 처리",
    ],
    trouble:
      "XSS 취약점 → 클라이언트 escape만으로는 JS 우회 가능, 서버 validation만으로는 이미 렌더링된 후라 늦음. 어느 한쪽만 믿는 구조는 안전하지 않다고 판단해, 클라이언트 HTML escape + 서버단 입력값 검증을 모두 적용하는 Defense in Depth 원칙으로 처리",
    tags: [
      { name: "C# ASP.NET", color: "blue" },
      { name: "HTML/CSS", color: "cyan" },
      { name: "JavaScript", color: "cyan" },
      { name: "jQuery" },
      { name: "MSSQL", color: "green" },
    ],
  },
  {
    id: 4,
    label: "04 · 준비중",
    title: "준비중",
    description: "다음 프로젝트를 정리 중입니다. 곧 업데이트할 예정입니다.",
    overview:
      "현재 프로젝트 내용을 정리하고 있습니다. 완료되면 상세 내용과 링크를 추가할 예정입니다.",
    tags: [{ name: "Coming Soon", color: "default" }],
  },
];
