export function CozyRoom({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      className={className}
      role="img"
      aria-label="A cozy bedroom with hammock, plant, lamp and a window full of stars"
    >
      <defs>
        <linearGradient id="roomFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#221F33" />
          <stop offset="100%" stopColor="#141822" />
        </linearGradient>
        <radialGradient id="lampGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#F4D2B8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#F4D2B8" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="320" height="320" rx="28" fill="url(#roomFloor)" />

      {/* Wall */}
      <rect x="0" y="0" width="320" height="220" fill="#1B1F2A" />
      {/* Floor */}
      <rect x="0" y="220" width="320" height="100" fill="#0F1117" />

      {/* Window with stars */}
      <rect x="40" y="36" width="120" height="120" rx="8" fill="#2D2A40" />
      <rect x="46" y="42" width="108" height="108" rx="4" fill="#141822" />
      <line x1="100" y1="42" x2="100" y2="150" stroke="#2D2A40" strokeWidth="3" />
      <line x1="46" y1="96"  x2="154" y2="96"  stroke="#2D2A40" strokeWidth="3" />
      <g fill="#F2EDE2" opacity="0.85">
        <circle cx="66"  cy="60"  r="1.4" />
        <circle cx="86"  cy="80"  r="1.2" />
        <circle cx="120" cy="62"  r="1.6" />
        <circle cx="140" cy="78"  r="1.2" />
        <circle cx="74"  cy="116" r="1.4" />
        <circle cx="124" cy="124" r="1.2" />
      </g>
      {/* Crescent moon in window */}
      <path d="M134 64 a10 10 0 1 0 8 16 8 8 0 0 1 -8 -16z" fill="#F2EDE2" />

      {/* Lamp */}
      <circle cx="240" cy="120" r="60" fill="url(#lampGlow)" />
      <rect x="232" y="80" width="16" height="80" fill="#3A3252" />
      <path d="M212 80 L268 80 L256 60 L224 60 Z" fill="#E9B89A" />
      <rect x="228" y="160" width="24" height="4" rx="2" fill="#3A3252" />

      {/* Plant */}
      <rect x="32" y="240" width="34" height="34" rx="4" fill="#7A8A6E" />
      <path d="M49 240 q-20 -20 -8 -50" stroke="#5F6E55" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M49 240 q12 -16 28 -32" stroke="#5F6E55" strokeWidth="6" fill="none" strokeLinecap="round" />
      <ellipse cx="36" cy="200" rx="10" ry="6" fill="#94A286" />
      <ellipse cx="70" cy="216" rx="10" ry="6" fill="#94A286" transform="rotate(20 70 216)" />
      <ellipse cx="48" cy="186" rx="8" ry="5" fill="#94A286" />

      {/* Rug */}
      <ellipse cx="180" cy="280" rx="120" ry="18" fill="#3A3252" opacity="0.6" />

      {/* Mini hammock between dots */}
      <circle cx="100" cy="200" r="3" fill="#94A286" />
      <circle cx="220" cy="200" r="3" fill="#94A286" />
      <path d="M100 200 C 130 240 190 240 220 200 C 190 230 130 230 100 200 Z" fill="#7A8A6E" />
    </svg>
  );
}
