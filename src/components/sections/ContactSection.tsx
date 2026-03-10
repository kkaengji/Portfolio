import SectionHeader from "@/components/ui/SectionHeader";
import ContactItem from "@/components/ui/ContactItem";
import { author } from "@/data/author";

const CONTACTS = [
  {
    icon: "✉",
    label: "Email",
    value: author.email,
    href: `mailto:${author.email}`,
  },
  {
    icon: "⌥",
    label: "GitHub",
    value: author.github.replace("https://", ""),
    href: author.github,
  },
  {
    icon: "v",
    label: "velog",
    value: author.velog.replace("https://", ""),
    href: author.velog,
  },
  {
    icon: "↓",
    label: "Resume",
    value: "이력서 다운로드 (.pdf)",
    href: author.resume,
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
