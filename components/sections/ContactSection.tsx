import SectionHeader from "@/components/ui/SectionHeader";
import ContactItem from "@/components/ui/ContactItem";

const CONTACTS = [
  {
    icon: "✉",
    label: "Email",
    value: "nkj960425@naver.com",
    href: "mailto:nkj960425@naver.com",
  },
  {
    icon: "⌥",
    label: "GitHub",
    value: "github.com/kkaengji",
    href: "https://github.com/kkaengji",
  },
  {
    icon: "v",
    label: "velog",
    value: "velog.io/@kkaengji",
    href: "https://velog.io/@kkaengji/posts",
  },
  {
    icon: "↓",
    label: "Resume",
    value: "이력서 다운로드 (.pdf)",
    href: "/resume.pdf",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <SectionHeader cmd="$ bash contact.sh" title="Contact" />
      <div className="contact-grid">
        {CONTACTS.map((c) => (
          <ContactItem key={c.label} {...c} />
        ))}
      </div>
    </section>
  );
}
