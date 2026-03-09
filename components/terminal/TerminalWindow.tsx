import { ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
}

export default function TerminalWindow({
  title = "zsh — portfolio — 80×24",
  children,
}: TerminalWindowProps) {
  return (
    <div className="terminal">
      <div className="terminal-bar">
        <div className="dot dot-r"></div>
        <div className="dot dot-y"></div>
        <div className="dot dot-g"></div>
        <div className="terminal-title">{title}</div>
      </div>
      <div className="terminal-body">{children}</div>
    </div>
  );
}
