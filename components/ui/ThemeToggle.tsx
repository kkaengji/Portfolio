'use client'

import { useTheme } from '@/contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      className="theme-toggle"
      aria-label={theme === 'light' ? '다크모드로 전환' : '라이트모드로 전환'}
      title={theme === 'light' ? 'dark mode' : 'light mode'}
    >
      {theme === 'light' ? '○' : '●'}
    </button>
  )
}
