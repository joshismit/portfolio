export default function ReactIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.6"/>
      <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" transform="rotate(-60 12 12)"/>
    </svg>
  );
}

