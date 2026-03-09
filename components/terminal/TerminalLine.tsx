interface TerminalLineProps {
  user?: string;
  host?: string;
  path?: string;
  command?: string;
  children?: React.ReactNode;
  isOutput?: boolean;
}

export default function TerminalLine({
  user = "Namdev",
  host = "portfolio",
  path = "~",
  command,
  children,
  isOutput = false,
}: TerminalLineProps) {
  if (isOutput) {
    return <div className="terminal-output">{children}</div>;
  }
  return (
    <div className="terminal-line">
      <span className="prompt">
        <span className="prompt-user">{user}</span>
        <span className="prompt-at">@</span>
        <span className="prompt-host">{host}</span>
        <span className="prompt-at">:</span>
        <span className="prompt-path">{path}</span>
        <span className="prompt-sym">$ </span>
      </span>
      {command && <span className="prompt-cmd">{command}</span>}
      {children}
    </div>
  );
}
