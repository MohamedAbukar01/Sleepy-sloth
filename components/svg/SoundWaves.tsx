export function SoundWaves({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      className={className}
      role="img"
      aria-label="Layered ambient soundscape waves: rain, forest, lullaby"
    >
      <defs>
        <linearGradient id="bgWaves" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#221F33" />
          <stop offset="100%" stopColor="#0F1117" />
        </linearGradient>
      </defs>
      <rect width="320" height="320" rx="28" fill="url(#bgWaves)" />

      {/* Rain droplets */}
      <g fill="#B4A7D6" opacity="0.7">
        <ellipse cx="60"  cy="60"  rx="2" ry="6" />
        <ellipse cx="100" cy="42"  rx="2" ry="6" />
        <ellipse cx="140" cy="70"  rx="2" ry="6" />
        <ellipse cx="180" cy="48"  rx="2" ry="6" />
        <ellipse cx="220" cy="68"  rx="2" ry="6" />
        <ellipse cx="260" cy="44"  rx="2" ry="6" />
      </g>

      {/* Three stacked sine waves */}
      <g fill="none" strokeLinecap="round">
        <path
          d="M20 140 Q 60 110 100 140 T 180 140 T 260 140 T 340 140"
          stroke="#B4A7D6"
          strokeWidth="3"
          opacity="0.95"
        />
        <path
          d="M20 190 Q 60 165 100 190 T 180 190 T 260 190 T 340 190"
          stroke="#94A286"
          strokeWidth="3"
          opacity="0.9"
        />
        <path
          d="M20 240 Q 60 210 100 240 T 180 240 T 260 240 T 340 240"
          stroke="#E9B89A"
          strokeWidth="3"
          opacity="0.9"
        />
      </g>

      {/* Labels */}
      <g fill="#F2EDE2" fontFamily="sans-serif" fontSize="11" opacity="0.85">
        <text x="24" y="132">rain</text>
        <text x="24" y="182">forest</text>
        <text x="24" y="232">lullaby</text>
      </g>

      {/* Play icon */}
      <circle cx="252" cy="266" r="22" fill="#F2EDE2" />
      <path d="M246 256 L 266 266 L 246 276 Z" fill="#1B1F2A" />
    </svg>
  );
}
