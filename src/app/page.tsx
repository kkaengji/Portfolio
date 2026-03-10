"use client";

import { useSidebar } from "@/contexts/SidebarContext";
import Sidebar from "@/components/layout/Sidebar";
import IntroSection from "@/components/sections/IntroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import GitHubSection from "@/components/sections/GitHubSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const { collapsed } = useSidebar();

  return (
    <div className={"layout" + (collapsed ? " sidebar-collapsed" : "")}>
      <Sidebar />
      <main className="main">
        <IntroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <GitHubSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
