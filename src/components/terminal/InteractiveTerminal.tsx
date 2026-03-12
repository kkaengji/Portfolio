"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { projects } from "@/data/projects";
import { author } from "@/data/author";
import {
  MENU_TEXT,
  WHOAMI_TEXT,
  SKILLS_TEXT,
  ABOUT_TEXT,
  CONTACT_TEXT,
} from "@/data/terminalTexts";

type Mode = "main" | "projects";

interface TerminalEntry {
  type: "input" | "output" | "error" | "blank";
  content: string;
}

interface InteractiveTerminalProps {
  onOpenProject?: (id: number) => void;
  embedded?: boolean;
}

export default function InteractiveTerminal({
  onOpenProject,
  embedded = false,
}: InteractiveTerminalProps) {
  const [errIdx, setErrIdx] = useState(0);
  const [history, setHistory] = useState<TerminalEntry[]>(
    embedded
      ? []
      : [
          { type: "output", content: MENU_TEXT },
          { type: "blank", content: "" },
        ],
  );
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const [mode, setMode] = useState<Mode>("main");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const push = (entries: TerminalEntry[]) => {
    setHistory((prev) => [...prev, ...entries]);
  };

  const runCommand = (raw: string) => {
    const trimmed = raw.trim();
    push([{ type: "input", content: raw }]);
    if (!trimmed) return;

    setCmdHistory((prev) => [raw, ...prev]);
    setHistIdx(-1);

    let cmd = trimmed.toLowerCase();

    // projects 모드: a/b/c/d → 열기, q → 메뉴로
    if (mode === "projects") {
      if (cmd === "q" || cmd === "quit" || cmd === "back") {
        setMode("main");
        push([{ type: "output", content: MENU_TEXT }, { type: "blank", content: "" }]);
        return;
      }
      const letters = ["a", "b", "c", "d"];
      const idx = letters.indexOf(cmd);
      if (idx !== -1) {
        const project = projects[idx];
        if (project) {
          push([{ type: "output", content: `opening ${project.title}...` }, { type: "blank", content: "" }]);
          setMode("main");
          onOpenProject?.(project.id);
          return;
        }
      }
      push([{ type: "error", content: `'${cmd}'은(는) 없는 항목입니다.` }, { type: "blank", content: "" }]);
      return;
    }

    // main 모드: 숫자 → 커맨드 매핑
    if (mode === "main") {
      const numMap: Record<string, string> = {
        "1": "whoami",
        "2": "ls",
        "3": "cat skills",
        "4": "cat about",
        "5": "contact",
        "6": "theme",
      };
      if (numMap[cmd]) cmd = numMap[cmd];
    }

    if (cmd === "clear") {
      setHistory([]);
      setMode("main");
      return;
    }

    if (cmd === "help" || cmd === "menu") {
      push([{ type: "output", content: MENU_TEXT }, { type: "blank", content: "" }]);
      setMode("main");
      return;
    }

    if (cmd === "whoami") {
      push([{ type: "output", content: WHOAMI_TEXT }, { type: "blank", content: "" }]);
      return;
    }

    if (cmd === "ls projects" || cmd === "ls") {
      const letters = ["a", "b", "c", "d"];
      const list = projects.map((p, i) => `  [${letters[i] ?? i}] ${p.title}`).join("\n");
      push([
        { type: "output", content: list },
        { type: "output", content: "\n알파벳을 입력하면 상세보기  (q: 메뉴로)" },
        { type: "blank", content: "" },
      ]);
      setMode("projects");
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
      push([{ type: "output", content: SKILLS_TEXT }, { type: "blank", content: "" }]);
      return;
    }

    if (cmd === "cat about" || cmd === "about") {
      push([{ type: "output", content: ABOUT_TEXT }, { type: "blank", content: "" }]);
      return;
    }

    if (cmd === "contact") {
      push([{ type: "output", content: CONTACT_TEXT }, { type: "blank", content: "" }]);
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

    const errors = [
      ` /\\_/\\\n( ×.× )  command not found: ${raw}\n > 💼 <\n         혹시 개발자를 찾고 계셨나요? 구직 중입니다`,
      `404: '${raw}' not found\n(저는 있습니다. 열심히 일할 준비 완료 ✅)`,
      `bash: ${raw}: command not found\n...근데 개발자는 찾으셨나요? 공교롭게도 구직 중입니다 🙋‍♂️`,
      `Error: 명령어도 없고 직장도 없습니다\n        (제발 연락주세요)`,
    ];
    push([
      { type: "output", content: errors[errIdx % errors.length] },
      { type: "blank", content: "" },
    ]);
    setErrIdx((prev) => prev + 1);
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

  const placeholder = mode === "projects" ? "a/b/c/d 입력... (q: 뒤로)" : "숫자(1~6) 또는 커맨드...";

  const inner = (
    <>
      <div className={embedded ? "it-history-embedded" : "it-history"}>
        {history.map((entry, i) => {
          if (entry.type === "blank") return <div key={i} className="blank" />;
          if (entry.type === "input")
            return (
              <div key={i} className="it-line">
                <span className="it-prompt">
                  <span className="prompt-user">{author.terminalUser}</span>
                  <span className="prompt-at">@</span>
                  <span className="prompt-host">{author.terminalHost}</span>
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
          <span className="prompt-user">{author.terminalUser}</span>
          <span className="prompt-at">@</span>
          <span className="prompt-host">{author.terminalHost}</span>
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
          placeholder={placeholder}
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
