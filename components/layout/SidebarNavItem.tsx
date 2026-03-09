"use client";

interface SidebarNavItemProps {
  href: string;
  icon: string;
  label: string;
  active?: boolean;
}

export default function SidebarNavItem({
  href,
  icon,
  label,
  active = false,
}: SidebarNavItemProps) {
  return (
    <a href={href} className={`nav-item ${active ? "active" : ""}`}>
      <span className="icon">{icon}</span> {label}
    </a>
  );
}
