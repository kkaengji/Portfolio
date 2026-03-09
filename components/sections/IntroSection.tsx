"use client";

import TerminalWindow from "../terminal/TerminalWindow";
import TypingAnimation from "../terminal/TypingAnimation";
import {
  TerminalLine,
  Prompt,
  Command,
  Output,
  Cursor,
  BlankLine,
} from "../terminal/TerminalLine";

export default function IntroSection() {
  return (
    <section id="intro" className="section">
      <TerminalWindow>
        <TypingAnimation delay={450}>
          <TerminalLine>
            <Prompt />
            <Command>whoami</Command>
          </TerminalLine>

          <TerminalLine>
            <Output>
              <span className="output-highlight">남경진</span>
              <span> · Frontend Developer (Fullstack 지향)</span>
            </Output>
          </TerminalLine>

          <BlankLine />

          <TerminalLine>
            <Prompt />
            <Command>cat history.log</Command>
          </TerminalLine>

          <TerminalLine>
            <Output>
              <span className="output-yellow">[2015-2020]</span>
              <span> 4년제 컴퓨터공학과 졸업</span>
            </Output>
          </TerminalLine>

          <TerminalLine>
            <Output>
              <span className="output-yellow">[2020]</span>
              <span> 윈도우 플랫폼기반 IoT 시스템 개발자(1200h) 수료</span>
            </Output>
          </TerminalLine>

          <TerminalLine>
            <Output>
              <span className="output-yellow">[2020–2025]</span>
              <span className="output-red"> C# / ASP.NET</span>
              <span> 4년 8개월 실무 · 백엔드·프론트 경계 없이 개발</span>
            </Output>
          </TerminalLine>

          <TerminalLine>
            <Output>
              <span className="output-yellow">[2025–ing]</span>
              <span className="output-green">
                {" "}
                React · Next.js · TypeScript · SpringBoot
              </span>
              <span> [kt cloud] 풀스택 과정</span>
            </Output>
          </TerminalLine>

          <TerminalLine>
            <Prompt />
            <Cursor />
          </TerminalLine>
        </TypingAnimation>
      </TerminalWindow>
    </section>
  );
}
