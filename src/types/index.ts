export type TagColor = 'blue' | 'green' | 'default'

export type Tag = {
  name: string
  color?: TagColor
}

export type ProjectImage = {
  src: string
  alt: string
}

export type Project = {
  id: number
  label: string
  title: string
  description: string
  // 모달 상세 필드
  overview?: string          // 더 긴 설명
  role?: string              // 내가 맡은 역할
  period?: string            // 개발 기간
  features?: string[]        // 주요 기능 목록
  trouble?: string           // 트러블슈팅 한 줄
  images?: ProjectImage[]    // 스크린샷
  tags: Tag[]
  github?: string
  demo?: string
}

export type Skill = {
  name: string
  level: number
  label: string
  color?: 'blue' | 'green' | 'yellow'
}

export type TimelineItem = {
  year: string
  title: string
  sub: string
  active?: boolean
}

export type NavItem = {
  href: string
  label: string
  icon: string
}
