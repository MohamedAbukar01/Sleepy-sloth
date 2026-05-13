export function SadSloth({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      className={className}
      role="img"
      aria-label="A sloth with confused, sad eyes after a phone was picked up"
    >
      <defs>
        <radialGradient id="sadSkyBg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#2D2A40" />
          <stop offset="100%" stopColor="#141822" />
        </radialGradient>
      </defs>
      <rect width="320" height="320" rx="28" fill="url(#sadSkyBg)" />

      {/* Phone glow rectangle behind sloth */}
      <rect x="200" y="180" width="60" height="100" rx="10" fill="#3A3653" />
      <rect x="206" y="188" width="48" height="80" rx="6" fill="#B4A7D6" opacity="0.85" />
      <rect x="214" y="200" width="32" height="3" rx="1.5" fill="#F2EDE2" opacity="0.8" />
      <rect x="214" y="210" width="22" height="3" rx="1.5" fill="#F2EDE2" opacity="0.6" />
      <rect x="214" y="220" width="28" height="3" rx="1.5" fill="#F2EDE2" opacity="0.6" />

      {/* Sloth */}
      <g>
        <ellipse cx="140" cy="200" rx="78" ry="60" fill="#94A286" />
        <ellipse cx="140" cy="208" rx="56" ry="42" fill="#B9C4A8" />
        <ellipse cx="120" cy="146" rx="58" ry="52" fill="#94A286" />
        <ellipse cx="120" cy="154" rx="42" ry="34" fill="#D2C6A8" />
        {/* Dark eye stripes */}
        <ellipse cx="100" cy="146" rx="12" ry="6" fill="#3A3252" opacity="0.85" />
        <ellipse cx="140" cy="146" rx="12" ry="6" fill="#3A3252" opacity="0.85" />
        {/* Open, sad eyes */}
        <circle cx="100" cy="146" r="5" fill="#0F1117" />
        <circle cx="140" cy="146" r="5" fill="#0F1117" />
        <circle cx="98" cy="144" r="1.4" fill="#F2EDE2" />
        <circle cx="138" cy="144" r="1.4" fill="#F2EDE2" />
        {/* Lifted, worried brows */}
        <path d="M88 132 q12 -6 22 4" stroke="#3A3252" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <path d="M128 136 q12 -8 22 -2" stroke="#3A3252" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        {/* Nose */}
        <ellipse cx="120" cy="160" rx="4" ry="2.8" fill="#3A3252" />
        {/* Small downturned mouth */}
        <path d="M114 172 q6 -4 12 0" stroke="#3A3252" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        {/* Tiny tear */}
        <path d="M104 156 q0 6 -2 9" stroke="#B4A7D6" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}
