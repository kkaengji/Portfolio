"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects } from "@/data/projects";
import { author } from "@/data/author";
import {
  MENU_TEXT,
  WHOAMI_TEXT,
  SKILLS_TEXT,
  ABOUT_TEXT,
  CONTACT_TEXT,
} from "@/data/terminalTexts";
import { Project } from "@/types";

interface ItEntry {
  type: "input" | "output" | "error" | "blank";
  content: string;
}

const STATIC_SCRIPT = [
  { type: "cmd", text: "whoami" },
  { type: "output", text: "남경진  ·  Frontend Developer (Fullstack 지향)" },
  { type: "blank", text: "" },
  { type: "cmd", text: "cat history.log" },
  { type: "year", text: "[2015-2020] 경남대 컴퓨터공학과 졸업" },
  {
    type: "year",
    text: "[2020] 윈도우 플랫폼기반 IoT 시스템 개발자(1200h) 수료",
  },
  { type: "year-red", text: "[2020–2025]  C# ASP.NET · 4년 8개월 실무" },
  {
    type: "year-green",
    text: "[2025–] kt cloud 풀스택 과정 (1056h) 수료, 프론트엔드 집중 수강 예정",
  },
] as const;

function PromptSpan() {
  return (
    <span className="prompt">
      <span className="prompt-user">{author.terminalUser}</span>
      <span className="prompt-at">@</span>
      <span className="prompt-host">{author.terminalHost}</span>
      <span className="prompt-at">:</span>
      <span className="prompt-path">~</span>
      <span className="prompt-sym">$ </span>
    </span>
  );
}

const WELCOME_TEXT = ` /\\_/\\
( o.o )  안녕하세요! 포트폴리오 터미널입니다.
 > ♥ <

  [1] whoami     개발자 정보
  [2] projects   프로젝트 목록
  [3] skills     기술 스택
  [4] about      소개
  [5] contact    연락처
  [6] theme      다크/라이트 전환

숫자 또는 커맨드를 입력하세요`;

type Mode = "main" | "projects";

const ERROR_MESSAGES = (raw: string) => [
  ` /\\_/\\\n( ×.× )  command not found: ${raw}\n > 💼 <\n         혹시 개발자를 찾고 계셨나요? 구직 중입니다`,
  `404: '${raw}' not found\n(저는 있습니다. 열심히 일할 준비 완료 ✅)`,
  `bash: ${raw}: command not found\n...근데 개발자는 찾으셨나요? 공교롭게도 구직 중입니다 🙋‍♂️`,
  `Error: 명령어도 없고 직장도 없습니다\n        (제발 연락주세요)`,
];

export default function IntroSection() {
  const [errIdx, setErrIdx] = useState(0);
  const [itHistory, setItHistory] = useState<ItEntry[]>([
    { type: "output", content: WELCOME_TEXT },
    { type: "blank", content: "" },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const [mode, setMode] = useState<Mode>("main");
  const [selected, setSelected] = useState<Project | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    if (!bodyRef.current) return;
    bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [itHistory]);

  const pushIt = (entries: ItEntry[]) =>
    setItHistory((prev) => [...prev, ...entries]);

  const runCommand = (raw: string) => {
    const trimmed = raw.trim();
    pushIt([{ type: "input", content: raw }]);
    if (!trimmed) return;
    setCmdHistory((prev) => [raw, ...prev]);
    setHistIdx(-1);

    let cmd = trimmed.toLowerCase();

    // projects 모드: a/b/c/d → 열기, q → 메뉴로
    if (mode === "projects") {
      if (cmd === "q" || cmd === "quit" || cmd === "back") {
        setMode("main");
        pushIt([{ type: "output", content: MENU_TEXT }, { type: "blank", content: "" }]);
        return;
      }
      const letters = ["a", "b", "c", "d"];
      const idx = letters.indexOf(cmd);
      if (idx !== -1) {
        const project = projects[idx];
        if (project) {
          pushIt([{ type: "output", content: `opening ${project.title}...` }, { type: "blank", content: "" }]);
          setMode("main");
          setSelected(project);
          return;
        }
      }
      pushIt([{ type: "error", content: `'${cmd}'은(는) 없는 항목입니다.` }, { type: "blank", content: "" }]);
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
      setItHistory([]);
      setMode("main");
      return;
    }
    if (cmd === "help" || cmd === "menu") {
      pushIt([
        { type: "output", content: MENU_TEXT },
        { type: "blank", content: "" },
      ]);
      setMode("main");
      return;
    }
    if (cmd === "whoami") {
      pushIt([
        { type: "output", content: "# 개발자 정보" },
        { type: "output", content: WHOAMI_TEXT },
        { type: "blank", content: "" },
      ]);
      return;
    }
    if (cmd === "ls projects" || cmd === "ls") {
      const letters = ["a", "b", "c", "d"];
      const list = projects.map((p, i) => `  [${letters[i] ?? i}] ${p.title}`).join("\n");
      pushIt([
        { type: "output", content: "# 프로젝트 목록" },
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
        pushIt([
          { type: "error", content: `프로젝트 ${num}을 찾을 수 없습니다.` },
          { type: "blank", content: "" },
        ]);
        return;
      }
      pushIt([
        { type: "output", content: `opening ${project.title}...` },
        { type: "blank", content: "" },
      ]);
      setSelected(project);
      return;
    }
    if (cmd === "cat skills" || cmd === "skills") {
      pushIt([
        { type: "output", content: "# 기술 스택" },
        { type: "output", content: SKILLS_TEXT },
        { type: "blank", content: "" },
      ]);
      return;
    }
    if (cmd === "cat about" || cmd === "about") {
      pushIt([
        { type: "output", content: "# 소개" },
        { type: "output", content: ABOUT_TEXT },
        { type: "blank", content: "" },
      ]);
      return;
    }
    if (cmd === "contact") {
      pushIt([
        { type: "output", content: "# 연락처" },
        { type: "output", content: CONTACT_TEXT },
        { type: "blank", content: "" },
      ]);
      return;
    }
    if (cmd === "theme") {
      document.querySelector<HTMLButtonElement>(".theme-toggle")?.click();
      pushIt([
        { type: "output", content: "테마가 전환되었습니다." },
        { type: "blank", content: "" },
      ]);
      return;
    }
    pushIt([
      { type: "output", content: ERROR_MESSAGES(raw)[errIdx % ERROR_MESSAGES(raw).length] },
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

  return (
    <section id="intro" className="section">
      <div className="terminal-window">
        <div className="terminal-bar">
          <span className="dot dot-r" />
          <span className="dot dot-y" />
          <span className="dot dot-g" />
          <span className="terminal-title">zsh — portfolio — 80×24</span>
        </div>
        <div
          className="terminal-body"
          ref={bodyRef}
          onClick={() => inputRef.current?.focus()}
        >
          {/* 정적 스크립트 */}
          {STATIC_SCRIPT.map((item, i) => {
            if (item.type === "blank") return <div key={i} className="blank" />;
            if (item.type === "cmd")
              return (
                <div key={i} className="terminal-line">
                  <PromptSpan />
                  <span className="prompt-cmd">{item.text}</span>
                </div>
              );
            if (item.type === "output")
              return (
                <div key={i} className="terminal-output">
                  <span className="out-highlight">
                    {item.text.split("·")[0].trim()}
                  </span>
                  {item.text.includes("·") && (
                    <span className="out-muted">
                      {" "}
                      · {item.text.split("·").slice(1).join("·").trim()}
                    </span>
                  )}
                </div>
              );
            const match = item.text.match(/^(\[.*?\])\s*(.*)/);
            const yearPart = match?.[1] ?? "";
            const restPart = match?.[2] ?? item.text;
            return (
              <div key={i} className="terminal-output">
                <span
                  className={
                    item.type === "year-red"
                      ? "out-red"
                      : item.type === "year-green"
                        ? "out-green"
                        : "out-yellow"
                  }
                >
                  {yearPart}
                </span>
                <span className="out-muted"> {restPart}</span>
              </div>
            );
          })}

          <div className="intro-it-divider" />

          {/* 인터랙티브 영역 */}
          {itHistory.map((entry, i) => {
            if (entry.type === "blank")
              return <div key={i} className="blank" />;
            if (entry.type === "input")
              return (
                <div key={i} className="terminal-line">
                  <PromptSpan />
                  <span className="prompt-cmd">{entry.content}</span>
                </div>
              );
            return (
              <div key={i} className="terminal-output it-output">
                {entry.content.split("\n").map((line, j) => (
                  <div
                    key={j}
                    className={
                      entry.type === "error"
                        ? "out-red"
                        : line.startsWith("# ")
                          ? "out-yellow"
                          : ""
                    }
                  >
                    {line || "\u00a0"}
                  </div>
                ))}
              </div>
            );
          })}

          <div className="terminal-line">
            <PromptSpan />
            <input
              ref={inputRef}
              className="it-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              autoComplete="off"
              spellCheck={false}
              placeholder={
                mode === "projects"
                  ? "a/b/c/d 입력... (q: 뒤로)"
                  : "숫자(1~6) 또는 커맨드..."
              }
            />
          </div>
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
