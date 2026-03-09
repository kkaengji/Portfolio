import SectionHeader from "../ui/SectionHeader";
import TerminalWindow from "../terminal/TerminalWindow";
import { TerminalLine, Output, BlankLine } from "../terminal/TerminalLine";

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <SectionHeader command="cat about.md" title="About" />
      <TerminalWindow title="about.md">
        <TerminalLine>
          <Output>
            C# / ASP.NET으로 <span className="output-highlight">4년 8개월</span>
            간 실무를 경험하며
            <br />
            프론트부터 백엔드까지 구분 없이 개발했습니다.
            <br />
            직접 사용자 화면을 만들고 반응을 볼 때 가장 재미있다는 걸 깨닫고
            <br />
            <span className="output-green">프론트엔드 개발자</span>로 방향을
            잡았습니다.
          </Output>
        </TerminalLine>

        <BlankLine />

        <TerminalLine>
          <Output className="output-yellow"># 강점</Output>
        </TerminalLine>
        <TerminalLine>
          <Output>
            · 백엔드 경험으로 API 구조·DB 흐름을 이해하는 프론트엔드 개발
          </Output>
        </TerminalLine>
        <TerminalLine>
          <Output>
            · 레거시 .NET 환경에서 단련된 문제 해결력 + 빠른 컨텍스트 파악
          </Output>
        </TerminalLine>
        <TerminalLine>
          <Output>· 풀스택 학습 중: Spring Boot · Node.js 기초 보유</Output>
        </TerminalLine>
      </TerminalWindow>
    </section>
  );
}
