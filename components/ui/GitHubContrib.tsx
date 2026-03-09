'use client'

import { useEffect, useState } from 'react'

interface ContribDay {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

interface GitHubContribProps {
  username: string
}

// GitHub contribution colors — level 0~4
const LEVELS = ['var(--contrib-0)', 'var(--contrib-1)', 'var(--contrib-2)', 'var(--contrib-3)', 'var(--contrib-4)']

function generateMockData(): ContribDay[] {
  const days: ContribDay[] = []
  const today = new Date()
  for (let i = 364; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(today.getDate() - i)
    const rand = Math.random()
    const count = rand < 0.45 ? 0 : rand < 0.65 ? 1 : rand < 0.8 ? 3 : rand < 0.93 ? 6 : 10
    const level = (count === 0 ? 0 : count <= 1 ? 1 : count <= 3 ? 2 : count <= 6 ? 3 : 4) as 0|1|2|3|4
    days.push({
      date: d.toISOString().split('T')[0],
      count,
      level,
    })
  }
  return days
}

export default function GitHubContrib({ username }: GitHubContribProps) {
  const [days, setDays] = useState<ContribDay[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // GitHub public API는 CORS 제한이 있어 실제 배포 시 /api/github route 필요
    // 지금은 mock 데이터로 UI 완성
    const mock = generateMockData()
    setDays(mock)
    setTotal(mock.reduce((s, d) => s + d.count, 0))
    setLoading(false)
  }, [username])

  // 53주 × 7일 그리드
  const weeks: ContribDay[][] = []
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7))
  }

  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

  if (loading) {
    return <div className="contrib-loading">loading contributions...</div>
  }

  return (
    <div className="contrib-wrap">
      <div className="contrib-header">
        <span className="contrib-total">
          <span className="out-green">{total.toLocaleString()}</span>
          <span className="out-muted"> contributions in the last year</span>
        </span>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contrib-link"
        >
          @{username} ↗
        </a>
      </div>

      <div className="contrib-graph">
        <div className="contrib-months">
          {months.map(m => <span key={m} className="contrib-month">{m}</span>)}
        </div>
        <div className="contrib-grid">
          {weeks.map((week, wi) => (
            <div key={wi} className="contrib-week">
              {week.map((day, di) => (
                <div
                  key={di}
                  className="contrib-day"
                  style={{ background: LEVELS[day.level] }}
                  title={`${day.date}: ${day.count} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="contrib-legend">
          <span className="out-muted" style={{fontSize:'10px'}}>Less</span>
          {[0,1,2,3,4].map(l => (
            <div key={l} className="contrib-day" style={{ background: LEVELS[l] }} />
          ))}
          <span className="out-muted" style={{fontSize:'10px'}}>More</span>
        </div>
      </div>
    </div>
  )
}
