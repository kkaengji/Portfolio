"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import Cursor from "@/components/terminal/Cursor";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects } from "@/data/projects";
import { Project } from "@/types";

type LineType = "cmd" | "output" | "blank" | "year" | "year-red" | "year-green";
interface ScriptLine {
  type: LineType;
  text: string;
}

const SCRIPT: ScriptLine[] = [
  { type: "cmd", text: "whoami" },
  { type: "output", text: "🦊 남경진  ·  Frontend Developer (Fullstack 지향)" },
  { type: "blank", text: "" },
  { type: "cmd", text: "cat history.log" },
  { type: "year", text: "[2015-2020]  컴퓨터공학과 졸업" },
  {
    type: "year",
    text: "[2020] 윈도우 플랫폼기반 IoT 시스템 개발자(1200h) 수료",
  },
  { type: "year-red", text: "[2020–2025]  C# / ASP.NET · 4년 8개월 실무" },
  {
    type: "year-green",
    text: "[2025–] kt cloud 풀스택 과정 (1056h) 수료, 프론트엔드 집중 수강 예정",
  },
];
const LINES = SCRIPT.map((s) => s.text);

// 인터랙티브 커맨드
const HELP_TEXT = `사용 가능한 커맨드:
  help           이 도움말
  ls projects    프로젝트 목록
  open <번호>     프로젝트 상세보기
  cat skills     스킬 목록
  cat about      소개
  contact        연락처
  theme          다크/라이트 전환
  clear          초기화`;

const SKILLS_TEXT = `Frontend:  React      ████████░░  80%
           Next.js    ████████░░  80%
           TypeScript ███████░░░  75%
           HTML/CSS   █████████░  90%

Backend:   C#/ASP.NET █████████░  90%  (실무 4.8년)
           Spring Boot██░░░░░░░░  20%
           Node.js    █░░░░░░░░░  15%`;

const ABOUT_TEXT = `C# / ASP.NET으로 4년 8개월간 실무를 경험하며
프론트부터 백엔드까지 구분 없이 개발했습니다.

직접 사용자 화면을 만들고 반응을 볼 때 가장
재미있다는 걸 깨닫고 프론트엔드로 방향을 잡았습니다.`;

const CONTACT_TEXT = `Email:    your@email.com
GitHub:   github.com/yourname
LinkedIn: linkedin.com/in/yourname`;

interface ItEntry {
  type: "input" | "output" | "error" | "blank";
  content: string;
}

function PromptSpan() {
  return (
    <span className="prompt">
      <span className="prompt-user">Namdev</span>
      <span className="prompt-at">@</span>
      <span className="prompt-host">portfolio</span>
      <span className="prompt-at">:</span>
      <span className="prompt-path">~</span>
      <span className="prompt-sym">$ </span>
    </span>
  );
}

export default function IntroSection() {
  const { displayed, done } = useTypingEffect(LINES, 28, 160);
  const [itHistory, setItHistory] = useState<ItEntry[]>([]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const [selected, setSelected] = useState<Project | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  // 타이핑 완료되면 인풋에 포커스
  useEffect(() => {
    if (done) inputRef.current?.focus();
  }, [done]);

  // 커맨드 출력될 때마다 터미널 바디 맨 아래로 스크롤
  useEffect(() => {
    if (!bodyRef.current) return;
    bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [itHistory, done]);

  const pushIt = (entries: ItEntry[]) =>
    setItHistory((prev) => [...prev, ...entries]);

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    pushIt([{ type: "input", content: raw }]);
    if (!cmd) return;
    setCmdHistory((prev) => [raw, ...prev]);
    setHistIdx(-1);

    if (cmd === "clear") {
      setItHistory([]);
      return;
    }
    if (cmd === "help") {
      pushIt([
        { type: "output", content: HELP_TEXT },
        { type: "blank", content: "" },
      ]);
      return;
    }
    if (cmd === "ls projects" || cmd === "ls") {
      const list = projects.map((p) => `  [${p.id}] ${p.title}`).join("\n");
      pushIt([
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
        { type: "output", content: SKILLS_TEXT },
        { type: "blank", content: "" },
      ]);
      return;
    }
    if (cmd === "cat about" || cmd === "about") {
      pushIt([
        { type: "output", content: ABOUT_TEXT },
        { type: "blank", content: "" },
      ]);
      return;
    }
    if (cmd === "contact") {
      pushIt([
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
      { type: "error", content: `command not found: ${raw}` },
      { type: "output", content: "'help' 로 커맨드 확인" },
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

  return (
    <section id="intro" className="section">
      <div className="terminal-window">
        <div className="terminal-bar">
          <span className="dot dot-r" />
          <span className="dot dot-y" />
          <span className="dot dot-g" />
          <span className="terminal-title">zsh — portfolio — 80×24</span>
        </div>
        <div className="terminal-body" ref={bodyRef}>
          {/* 스크립트 타이핑 */}
          {SCRIPT.map((item, i) => {
            const text = displayed[i];
            // undefined = 아직 이 줄 차례 아님 → 렌더 안함
            if (text === undefined) return null;

            if (item.type === "blank") return <div key={i} className="blank" />;

            const isTypingThisLine =
              text !== undefined && text.length < item.text.length;
            const showCursorHere = !done && isTypingThisLine;

            if (item.type === "cmd") {
              return (
                <div key={i} className="terminal-line">
                  <PromptSpan />
                  <span className="prompt-cmd">{text}</span>
                  {showCursorHere && <Cursor />}
                </div>
              );
            }

            const yearMatch = text.match(/^(\[.*?\])\s*(.*)/);
            const yearPart = yearMatch?.[1] ?? "";
            const restPart = yearMatch?.[2] ?? text;

            return (
              <div key={i} className="terminal-output">
                {item.type === "output" && (
                  <>
                    <span className="out-highlight">
                      {text.split("·")[0].trim()}
                    </span>
                    {text.includes("·") && (
                      <span className="out-muted">
                        {" "}
                        · {text.split("·").slice(1).join("·").trim()}
                      </span>
                    )}
                  </>
                )}
                {(item.type === "year" ||
                  item.type === "year-red" ||
                  item.type === "year-green") && (
                  <>
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
                    {showCursorHere && <Cursor />}
                  </>
                )}
              </div>
            );
          })}

          {/* 타이핑 완료 후 인터랙티브 영역 */}
          {done && (
            <>
              <div className="intro-it-divider" />

              {/* 인터랙티브 히스토리 */}
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
                        className={entry.type === "error" ? "out-red" : ""}
                      >
                        {line || "\u00a0"}
                      </div>
                    ))}
                  </div>
                );
              })}

              {/* 입력 줄 */}
              <div
                className="terminal-line"
                onClick={() => inputRef.current?.focus()}
              >
                <PromptSpan />
                <input
                  ref={inputRef}
                  className="it-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  autoComplete="off"
                  spellCheck={false}
                  placeholder=" 'help' 를 입력해보세요"
                />
              </div>
            </>
          )}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
