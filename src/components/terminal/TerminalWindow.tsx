interface TerminalWindowProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export default function TerminalWindow({ title = 'zsh', children, className = '' }: TerminalWindowProps) {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-bar">
        <span className="dot dot-r" />
        <span className="dot dot-y" />
        <span className="dot dot-g" />
        <span className="terminal-title">{title}</span>
      </div>
      <div className="terminal-body">{children}</div>
    </div>
  )
}
