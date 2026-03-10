interface ContactItemProps {
  icon: string;
  label: string;
  value: string;
  href: string;
}

export default function ContactItem({
  icon,
  label,
  value,
  href,
}: ContactItemProps) {
  return (
    <a
      href={href}
      className="contact-item"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="contact-icon" role="img" aria-label={label}>
        {icon}
      </span>
      <div>
        <div className="contact-label">{label}</div>
        <div className="contact-value">{value}</div>
      </div>
    </a>
  );
}
