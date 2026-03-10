import { author } from "@/data/author";

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="포트폴리오 푸터">
      <p className="site-footer-main">
        Built by <strong>{author.name}</strong>.
      </p>
      <p className="site-footer-sub">
        Assisted by
        <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer">
          ChatGPT
        </a>
        <span className="footer-dot">·</span>
        <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">
          Claude
        </a>
        <span className="footer-dot">·</span>
        <a
          href="https://github.com/features/copilot"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Copilot
        </a>
      </p>
    </footer>
  );
}
