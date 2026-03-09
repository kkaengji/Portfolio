import TerminalWindow from '@/components/terminal/TerminalWindow'
import TerminalLine from '@/components/terminal/TerminalLine'
import SectionHeader from '@/components/ui/SectionHeader'

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <SectionHeader cmd="$ cat about.md" title="About" />
      <TerminalWindow title="about.md">
        <TerminalLine isOutput>
          <p className="out-muted">
            C# / ASP.NET으로 <span className="out-highlight">4년 8개월</span>간 실무를 경험하며<br />
            프론트부터 백엔드까지 구분 없이 개발했습니다.<br />
            직접 사용자 화면을 만들고 반응을 볼 때 가장 재미있다는 걸 깨닫고<br />
            <span className="out-green">프론트엔드 개발자</span>로 방향을 잡았습니다.
          </p>
        </TerminalLine>
        <div className="blank" />
        <TerminalLine isOutput>
          <span className="out-yellow"># 강점</span>
        </TerminalLine>
        <TerminalLine isOutput>
          <span className="out-muted">· 백엔드 경험으로 API 구조·DB 흐름을 이해하는 프론트엔드 개발</span>
        </TerminalLine>
        <TerminalLine isOutput>
          <span className="out-muted">· 레거시 .NET 환경에서 단련된 문제 해결력 + 빠른 컨텍스트 파악</span>
        </TerminalLine>
        <TerminalLine isOutput>
          <span className="out-muted">· 풀스택 학습 중: Spring Boot · Node.js 기초 보유</span>
        </TerminalLine>
      </TerminalWindow>
    </section>
  )
}
