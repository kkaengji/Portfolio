import TerminalWindow from "@/components/terminal/TerminalWindow";
import TerminalLine from "@/components/terminal/TerminalLine";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <SectionHeader cmd="$ cat about.md" title="About" />
      <TerminalWindow title="about.md">
        <TerminalLine isOutput>
          <p className="out-muted">
            C# / ASP.NET으로 <span className="out-highlight">4년 8개월</span>간
            <br />
            DB 설계·Stored Procedure 작성부터 화면 구현까지
            <br />
            중간 레이어 없이 전체 흐름을 직접 다뤘습니다.
            <br />
            그 경험 위에서 화면을 만들 때 가장 재미있다는 걸 깨닫고
            <br />
            <span className="out-green">프론트엔드 개발자</span>로 방향을
            잡았습니다.
          </p>
        </TerminalLine>
        <div className="blank" />
        <TerminalLine isOutput>
          <span className="out-yellow"># 경력이 만든 차이</span>
        </TerminalLine>
        <TerminalLine isOutput>
          <span className="out-muted">
            · DB~화면 전체 흐름 경험 → 데이터가 어디서 어떻게 오는지 알고 화면
            설계
          </span>
        </TerminalLine>
        <TerminalLine isOutput>
          <span className="out-muted">
            · 운영 환경 경험 → 납품·운영 중 실제 장애 대응으로 단련된 문제
            해결력
          </span>
        </TerminalLine>
        <TerminalLine isOutput>
          <span className="out-muted">
            · 백엔드 코드 리딩 가능 → DB 구조 파악·병목 원인 추적이 빠름
          </span>
        </TerminalLine>
        <TerminalLine isOutput>
          <span className="out-muted">
            · AI 도구 활용 → 코딩(Copilot·Claude) / 설계·문서(ChatGPT·Gemini) /
            UI 프로토(v0){" "}
          </span>
        </TerminalLine>
      </TerminalWindow>
    </section>
  );
}
