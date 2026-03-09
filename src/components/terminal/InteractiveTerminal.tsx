"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { projects } from "@/data/projects";

interface TerminalEntry {
  type: "input" | "output" | "error" | "blank";
  content: string;
}

const HELP_TEXT = `사용 가능한 커맨드:
  help              이 도움말 표시
  whoami            개발자 정보
  ls projects       프로젝트 목록
  open <번호>        프로젝트 상세보기 (예: open 1)
  cat skills        스킬 목록
  cat about         소개
  contact           연락처
  clear             터미널 초기화
  theme             다크/라이트 모드 전환`;

const WHOAMI_TEXT = `남경진 (Namdev)
역할:    Frontend Developer (Fullstack 지향)
경력:    C# / ASP.NET 4년 8개월
현재:    React · Next.js · TypeScript 학습 중
상태:    구직 중 ✓`;

const SKILLS_TEXT = `Frontend:  React    ████████░░  80%
           Next.js  ████████░░  80%
           TypeScript ███████░░  75%
           HTML/CSS ████████░  85%

Backend:   C#/ASP.NET ████████░  88%  (실무 4.8년)
           Spring Boot ████░░░░  40%
           Node.js  ████░░░░░  45%`;

const ABOUT_TEXT = `C# / ASP.NET으로 4년 8개월간 실무를 경험하며
프론트부터 백엔드까지 구분 없이 개발했습니다.

직접 사용자 화면을 만들고 반응을 볼 때 가장
재미있다는 걸 깨닫고 프론트엔드로 방향을 잡았습니다.

백엔드 경험이 있어 API 구조와 DB 흐름을
이해하는 프론트엔드 개발이 강점입니다.`;

const CONTACT_TEXT = `Email:    your@email.com
GitHub:   github.com/yourname
LinkedIn: linkedin.com/in/yourname
Resume:   /resume.pdf`;

interface InteractiveTerminalProps {
  onOpenProject?: (id: number) => void;
  embedded?: boolean; // true면 터미널 껍데기 없이 인라인 렌더
}

export default function InteractiveTerminal({
  onOpenProject,
  embedded = false,
}: InteractiveTerminalProps) {
  const [history, setHistory] = useState<TerminalEntry[]>(
    embedded
      ? []
      : [
          {
            type: "output",
            content: "포트폴리오 터미널 v1.0.0 — 'help'를 입력해보세요",
          },
          { type: "blank", content: "" },
        ],
  );
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const push = (entries: TerminalEntry[]) => {
    setHistory((prev) => [...prev, ...entries]);
  };

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    push([{ type: "input", content: raw }]);
    if (!cmd) return;

    setCmdHistory((prev) => [raw, ...prev]);
    setHistIdx(-1);

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    if (cmd === "help") {
      push([
        { type: "output", content: HELP_TEXT },
        { type: "blank", content: "" },
      ]);
      return;
    }
    if (cmd === "whoami") {
      push([
        { type: "output", content: WHOAMI_TEXT },
        { type: "blank", content: "" },
      ]);
      return;
    }
    if (cmd === "ls projects" || cmd === "ls") {
      const list = projects.map((p) => `  [${p.id}] ${p.title}`).join("\n");
      push([
        { type: "output", content: list },
        { type: "output", content: "\n'open <번호>' 로 상세보기" },
        { type: "blank", content: "" },
      ]);
      return;
    }
    if (cmd.startsWith("open ")) {
      const num = parseInt(cmd.replace("open ", ""));
      const project = projects.find((p) => p.id === num);
      if (!project) {
        push([
          { type: "error", content: `프로젝트 ${num}을 찾을 수 없습니다.` },
          { type: "blank", content: "" },
        ]);
        return;
      }
      push([
        { type: "output", content: `opening ${project.title}...` },
        { type: "blank", content: "" },
      ]);
      onOpenProject?.(num);
      return;
    }
    if (cmd === "cat skills" || cmd === "skills") {
      push([
        { type: "output", content: SKILLS_TEXT },
        { type: "blank", content: "" },
      ]);
      return;
    }
    if (cmd === "cat about" || cmd === "about") {
      push([
        { type: "output", content: ABOUT_TEXT },
        { type: "blank", content: "" },
      ]);
      return;
    }
    if (cmd === "contact") {
      push([
        { type: "output", content: CONTACT_TEXT },
        { type: "blank", content: "" },
      ]);
      return;
    }
    if (cmd === "theme") {
      document.querySelector<HTMLButtonElement>(".theme-toggle")?.click();
      push([
        { type: "output", content: "테마가 전환되었습니다." },
        { type: "blank", content: "" },
      ]);
      return;
    }
    push([
      { type: "error", content: `command not found: ${raw}` },
      { type: "output", content: "'help'로 사용 가능한 커맨드를 확인하세요" },
      { type: "blank", content: "" },
    ]);
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const idx = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(idx);
      setInput(cmdHistory[idx] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const idx = Math.max(histIdx - 1, -1);
      setHistIdx(idx);
      setInput(idx === -1 ? "" : (cmdHistory[idx] ?? ""));
    }
  };

  const inner = (
    <>
      <div className={embedded ? "it-history-embedded" : "it-history"}>
        {history.map((entry, i) => {
          if (entry.type === "blank") return <div key={i} className="blank" />;
          if (entry.type === "input")
            return (
              <div key={i} className="it-line">
                <span className="it-prompt">
                  <span className="prompt-user">Namdev</span>
                  <span className="prompt-at">@</span>
                  <span className="prompt-host">portfolio</span>
                  <span className="prompt-at">:</span>
                  <span className="prompt-path">~</span>
                  <span className="prompt-sym">$ </span>
                </span>
                <span className="it-cmd">{entry.content}</span>
              </div>
            );
          if (entry.type === "error")
            return (
              <div key={i} className="it-output it-error">
                {entry.content}
              </div>
            );
          return (
            <div key={i} className="it-output">
              {entry.content.split("\n").map((line, j) => (
                <div key={j}>{line || "\u00a0"}</div>
              ))}
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      <div className={embedded ? "it-input-line-embedded" : "it-input-line"}>
        <span className="it-prompt">
          <span className="prompt-user">Namdev</span>
          <span className="prompt-at">@</span>
          <span className="prompt-host">portfolio</span>
          <span className="prompt-at">:</span>
          <span className="prompt-path">~</span>
          <span className="prompt-sym">$ </span>
        </span>
        <input
          ref={inputRef}
          className="it-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          autoComplete="off"
          spellCheck={false}
          placeholder="입력하세요..."
        />
      </div>
    </>
  );

  if (embedded) {
    return (
      <div
        className="interactive-terminal-embedded"
        onClick={() => inputRef.current?.focus()}
      >
        {inner}
      </div>
    );
  }

  return (
    <div
      className="interactive-terminal"
      onClick={() => inputRef.current?.focus()}
    >
      {inner}
    </div>
  );
}
