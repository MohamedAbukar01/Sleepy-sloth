export function MorningLetter({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 480"
      className={className}
      role="img"
      aria-label="A phone showing the morning letter from Sam the sloth"
    >
      <defs>
        <linearGradient id="phoneBezel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#221F33" />
          <stop offset="100%" stopColor="#141822" />
        </linearGradient>
        <linearGradient id="screenSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3A3653" />
          <stop offset="55%" stopColor="#D89A77" />
          <stop offset="100%" stopColor="#F4D2B8" />
        </linearGradient>
      </defs>

      {/* Phone bezel */}
      <rect x="20" y="10" width="280" height="460" rx="40" fill="url(#phoneBezel)" />
      <rect x="28" y="18" width="264" height="444" rx="34" fill="#0F1117" />
      {/* Screen */}
      <rect x="36" y="26" width="248" height="428" rx="28" fill="url(#screenSky)" />

      {/* Notch */}
      <rect x="140" y="30" width="40" height="10" rx="5" fill="#0F1117" />

      {/* Sun */}
      <circle cx="160" cy="120" r="32" fill="#F4D2B8" />
      <circle cx="160" cy="120" r="32" fill="#F4D2B8" opacity="0.4" transform="translate(0 0) scale(1.4)" />

      {/* Letter card */}
      <rect x="56" y="180" width="208" height="248" rx="18" fill="#F2EDE2" />
      <rect x="56" y="180" width="208" height="42" rx="18" fill="#7A8A6E" />
      <text x="160" y="208" textAnchor="middle" fill="#F2EDE2" fontSize="14" fontFamily="serif" fontStyle="italic">
        Good morning
      </text>

      {/* Letter lines */}
      <g fill="#3A3252">
        <text x="76" y="248" fontSize="11" fontFamily="serif">Sam slept for 7.5 hours</text>
        <text x="76" y="268" fontSize="11" fontFamily="serif">and dreamt of floating clouds.</text>
        <text x="76" y="304" fontSize="11" fontFamily="serif">You put your phone down</text>
        <text x="76" y="320" fontSize="11" fontFamily="serif">at 10:32 PM.</text>
        <text x="76" y="356" fontSize="11" fontFamily="serif" fontStyle="italic">Sam was very proud.</text>
      </g>

      {/* Continue button */}
      <rect x="92" y="384" width="136" height="32" rx="16" fill="#2D2A40" />
      <text x="160" y="404" textAnchor="middle" fill="#F2EDE2" fontSize="12" fontFamily="sans-serif">
        Continue
      </text>
    </svg>
  );
}
