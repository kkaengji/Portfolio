# 포트폴리오 — Next.js + TypeScript

## 시작하기

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인

---

## 기능

- 🖥️ 라이트 터미널 컨셉 UI
- 🌙 다크모드 토글 (시스템 설정 자동 감지)
- 📋 프로젝트 카드 → 모달 상세보기
- 🌿 GitHub 잔디 연동 (contributions graph)
- ⌨️ 인터랙티브 터미널 (실제 타이핑 가능)

---

## GitHub 잔디 실제 연동 방법

1. https://github.com/settings/tokens 에서 토큰 발급 (read:user 권한)
2. `.env.local` 파일 생성:

```
GITHUB_TOKEN=ghp_your_token_here
```

3. `components/ui/GitHubContrib.tsx` 에서 mock 데이터 부분을 API 호출로 교체:

```ts
useEffect(() => {
  fetch(`/api/github?username=${username}`)
    .then(r => r.json())
    .then(data => {
      setDays(data.days)
      setTotal(data.total)
      setLoading(false)
    })
}, [username])
```

4. Vercel 배포 시 환경변수에 `GITHUB_TOKEN` 추가

---

## 인터랙티브 터미널 커맨드

| 커맨드 | 설명 |
|--------|------|
| `help` | 도움말 |
| `whoami` | 개발자 정보 |
| `ls projects` | 프로젝트 목록 |
| `open <번호>` | 프로젝트 모달 오픈 |
| `cat skills` | 스킬 목록 |
| `cat about` | 소개 |
| `contact` | 연락처 |
| `theme` | 다크/라이트 전환 |
| `clear` | 터미널 초기화 |
| `↑ / ↓` | 커맨드 히스토리 |

---

## 커스터마이징

| 파일 | 수정 내용 |
|------|----------|
| `data/projects.ts` | 프로젝트 추가/수정 |
| `data/skills.ts` | 스킬 레벨 조정 |
| `components/ui/GitHubContrib.tsx` | username 변경 |
| `components/layout/Sidebar.tsx` | 이름, 링크 |
| `components/sections/ContactSection.tsx` | 연락처 |
| `app/globals.css` `:root` | 색상 전체 변경 |

## 배포 (Vercel)

```bash
npm install -g vercel
vercel
```

환경변수 `GITHUB_TOKEN` 추가 후 배포하면 실제 잔디 연동됨.
