"use client";

import Link from "next/link";
import { useActiveSection } from "@/hooks/useActiveSection";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useSidebar } from "@/contexts/SidebarContext";

// 접혔을 때 보여줄 아이콘 (유니코드 심볼)
const NAV_ITEMS = [
  { href: "#intro", label: "whoami", icon: "⌘", collapsedIcon: "⌘" },
  { href: "#about", label: "about.md", icon: "◉", collapsedIcon: "◉" },
  { href: "#projects", label: "projects/", icon: "▦", collapsedIcon: "▦" },
  { href: "#skills", label: "skills.json", icon: "◈", collapsedIcon: "◈" },
  { href: "#github", label: "github.log", icon: "⌥", collapsedIcon: "⌥" },
  { href: "#contact", label: "contact.sh", icon: "✦", collapsedIcon: "✦" },
];

const EXT_ITEMS = [
  { href: "https://github.com/yourname", label: "GitHub", icon: "⎋" },
  { href: "#", label: "LinkedIn", icon: "⎋" },
  { href: "/resume.pdf", label: "Resume.pdf", icon: "↓" },
];

export default function Sidebar() {
  const active = useActiveSection([
    "intro",
    "about",
    "projects",
    "skills",
    "github",
    "contact",
  ]);
  const { collapsed, toggle } = useSidebar();

  return (
    <aside className={collapsed ? "sidebar sidebar-collapsed" : "sidebar"}>
      {/* 헤더 */}
      <div className="sidebar-header">
        {!collapsed && (
          <div className="sidebar-header-info">
            <div className="sidebar-dir">~/portfolio</div>
            <div className="sidebar-name">남경진</div>
            <div className="sidebar-role">Frontend Developer</div>
          </div>
        )}
        <button
          className="sidebar-toggle"
          onClick={toggle}
          aria-label={collapsed ? "사이드바 펼치기" : "사이드바 접기"}
          title={collapsed ? "펼치기" : "접기"}
        >
          {/* 접기/펼치기 화살표 */}
          {collapsed ? "»" : "«"}
        </button>
      </div>

      {/* 네비 */}
      <nav className="sidebar-nav">
        {!collapsed && <span className="nav-label">탐색</span>}

        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              "nav-item" + (active === item.href.slice(1) ? " active" : "")
            }
            title={item.label}
          >
            <span className="nav-icon">
              {collapsed ? item.collapsedIcon : item.icon}
            </span>
            {!collapsed && <span className="nav-text">{item.label}</span>}
          </Link>
        ))}

        {!collapsed && (
          <>
            <span className="nav-label" style={{ marginTop: "16px" }}>
              외부 링크
            </span>
            {EXT_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-item"
                target="_blank"
                rel="noopener noreferrer"
                title={item.label}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.label}</span>
              </a>
            ))}
          </>
        )}
      </nav>

      {/* 하단 */}
      <div
        className={
          "sidebar-bottom" + (collapsed ? " sidebar-bottom-collapsed" : "")
        }
      >
        {!collapsed && (
          <div className="sidebar-status">
            <span className="status-dot" />
            <span className="status-available">구직 중</span>
            <span className="status-year"> · 2025</span>
          </div>
        )}
        <ThemeToggle />
      </div>
    </aside>
  );
}
