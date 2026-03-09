import SectionHeader from "../ui/SectionHeader";
import ContactItem from "../ui/ContactItem";
import { ContactItem as ContactItemType } from "@/types";

const contacts: ContactItemType[] = [
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
    icon: "◈",
    label: "LinkedIn",
    value: "linkedin.com/in/kkaengji",
    href: "https://linkedin.com/in/kkaengji",
  },
  {
    icon: "↓",
    label: "Resume",
    value: "이력서 다운로드 (.pdf)",
    href: "#",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <SectionHeader command="bash contact.sh" title="Contact" />
      <div className="contact-grid">
        {contacts.map((contact, index) => (
          <ContactItem key={index} contact={contact} />
        ))}
      </div>
    </section>
  );
}
