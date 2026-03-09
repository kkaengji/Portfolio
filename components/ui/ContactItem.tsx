import { ContactItem as ContactItemType } from "@/types";

interface ContactItemProps {
  contact: ContactItemType;
}

export default function ContactItem({ contact }: ContactItemProps) {
  return (
    <a href={contact.href} className="contact-item">
      <span className="contact-icon">{contact.icon}</span>
      <div>
        <div className="contact-label">{contact.label}</div>
        <div className="contact-value">{contact.value}</div>
      </div>
    </a>
  );
}
