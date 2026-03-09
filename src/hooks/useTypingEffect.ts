import { useState, useEffect, useRef } from 'react'

export function useTypingEffect(lines: string[], speed = 28, lineDelay = 160) {
  // displayed[i] = 현재까지 타이핑된 문자열 (해당 줄이 아직 시작 안됐으면 undefined)
  const [displayed, setDisplayed] = useState<(string | undefined)[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [done, setDone] = useState(false)
  const started = useRef(false)

  useEffect(() => {
    if (started.current) return
    started.current = true
    // 첫 줄만 빈 문자열로 시작, 나머지는 undefined (아직 미출현)
    setDisplayed(lines.map((_, i) => (i === 0 ? '' : undefined)))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!started.current) return
    if (currentLine >= lines.length) {
      setDone(true)
      return
    }
    const line = lines[currentLine]

    // blank 줄은 타이핑 없이 바로 다음 줄로
    if (line === '') {
      const t = setTimeout(() => {
        setDisplayed(prev => {
          const next = [...prev]
          next[currentLine] = ''
          if (currentLine + 1 < lines.length) next[currentLine + 1] = ''
          return next
        })
        setCurrentLine(l => l + 1)
        setCurrentChar(0)
      }, lineDelay)
      return () => clearTimeout(t)
    }

    if (currentChar < line.length) {
      const t = setTimeout(() => {
        setDisplayed(prev => {
          const next = [...prev]
          next[currentLine] = line.slice(0, currentChar + 1)
          return next
        })
        setCurrentChar(c => c + 1)
      }, speed)
      return () => clearTimeout(t)
    } else {
      // 줄 완성 → 다음 줄 undefined → '' 로 전환 (나타나게)
      const t = setTimeout(() => {
        setDisplayed(prev => {
          const next = [...prev]
          if (currentLine + 1 < lines.length) next[currentLine + 1] = ''
          return next
        })
        setCurrentLine(l => l + 1)
        setCurrentChar(0)
      }, lineDelay)
      return () => clearTimeout(t)
    }
  }, [currentLine, currentChar, lines, speed, lineDelay])

  return { displayed, currentLine, done }
}
