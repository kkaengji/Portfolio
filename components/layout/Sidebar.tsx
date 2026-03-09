"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import SidebarNavItem from "./SidebarNavItem";

export default function Sidebar() {
  const activeSection = useActiveSection();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title">~/portfolio</div>
        <div className="sidebar-name">남경진</div>
        <div className="sidebar-role"> Frontend Developer</div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <span className="nav-label">탐색</span>
          <SidebarNavItem
            href="#intro"
            icon="$"
            label="whoami"
            active={activeSection === "intro"}
          />
          <SidebarNavItem
            href="#about"
            icon="›"
            label="about.md"
            active={activeSection === "about"}
          />
          <SidebarNavItem
            href="#projects"
            icon="›"
            label="projects/"
            active={activeSection === "projects"}
          />
          <SidebarNavItem
            href="#skills"
            icon="›"
            label="skills.json"
            active={activeSection === "skills"}
          />
          <SidebarNavItem
            href="#contact"
            icon="›"
            label="contact.sh"
            active={activeSection === "contact"}
          />
        </div>

        <div className="nav-section">
          <span className="nav-label">외부 링크</span>
          <SidebarNavItem href="#" icon="⎋" label="GitHub" />
          <SidebarNavItem href="#" icon="⎋" label="LinkedIn" />
          <SidebarNavItem href="#" icon="⎋" label="Resume.pdf" />
        </div>
      </nav>

      <div className="sidebar-status">
        <span className="status-dot"></span>
        <span style={{ color: "var(--accent2)" }}>구직 중</span>
        <span style={{ color: "var(--muted)" }}> · 2025</span>
      </div>
    </aside>
  );
}
