import { ReactNode } from "react";

interface TerminalLineProps {
  children: ReactNode;
  className?: string;
}

export function TerminalLine({ children, className = "" }: TerminalLineProps) {
  return <div className={`line ${className}`}>{children}</div>;
}

interface PromptProps {
  user?: string;
  host?: string;
  path?: string;
}

export function Prompt({
  user = "NKJ_dev",
  host = "portfolio",
  path = "~",
}: PromptProps) {
  return (
    <span className="prompt">
      <span className="prompt-user">{user}</span>
      <span className="prompt-at">@</span>
      <span className="prompt-host">{host}</span>
      <span className="prompt-at">:</span>
      <span className="prompt-path">{path}</span>
      <span className="prompt-sym">$</span>
    </span>
  );
}

interface CommandProps {
  children: ReactNode;
}

export function Command({ children }: CommandProps) {
  return <span className="cmd">{children}</span>;
}

interface OutputProps {
  children: ReactNode;
  className?: string;
}

export function Output({ children, className = "" }: OutputProps) {
  return <span className={`output ${className}`}>{children}</span>;
}

export function Cursor() {
  return <span className="cursor"></span>;
}

export function BlankLine() {
  return <div className="blank"></div>;
}
