export function SlothInHammock({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 480"
      className={className}
      role="img"
      aria-label="A sleepy sloth curled up in a hammock under a crescent moon"
    >
      <defs>
        <radialGradient id="skyglow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#3A3653" />
          <stop offset="100%" stopColor="#1B1F2A" />
        </radialGradient>
        <linearGradient id="hammock" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7A8A6E" />
          <stop offset="100%" stopColor="#5F6E55" />
        </linearGradient>
        <radialGradient id="moonglow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F4D2B8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#F4D2B8" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="240" cy="240" r="220" fill="url(#skyglow)" />

      {/* Moon */}
      <g>
        <circle cx="360" cy="120" r="70" fill="url(#moonglow)" />
        <path
          d="M360 78a42 42 0 1 0 30 71 34 34 0 0 1-30-71z"
          fill="#F2EDE2"
        />
      </g>

      {/* Stars */}
      <g fill="#F2EDE2" className="animate-twinkle" opacity="0.7">
        <circle cx="90" cy="90" r="1.6" />
        <circle cx="140" cy="60" r="1.2" />
        <circle cx="210" cy="100" r="1.8" />
        <circle cx="300" cy="50" r="1.4" />
        <circle cx="420" cy="220" r="1.6" />
        <circle cx="80" cy="200" r="1.2" />
        <circle cx="60" cy="320" r="1.4" />
      </g>

      {/* Tree trunks (left + right) */}
      <rect x="40" y="180" width="22" height="260" rx="6" fill="#221F33" />
      <rect x="418" y="180" width="22" height="260" rx="6" fill="#221F33" />

      {/* Hammock + sloth group with gentle sway */}
      <g
        className="origin-center animate-sway"
        style={{ transformOrigin: "240px 260px" }}
      >
        {/* Hammock ropes */}
        <path
          d="M62 220 C 140 250 340 250 418 220"
          stroke="#94A286"
          strokeWidth="3"
          fill="none"
        />
        {/* Hammock fabric */}
        <path
          d="M62 230 C 140 360 340 360 418 230 C 340 330 140 330 62 230 Z"
          fill="url(#hammock)"
        />
        {/* Fabric weave lines */}
        <path
          d="M90 252 C 160 320 320 320 390 252"
          stroke="#5F6E55"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M110 268 C 170 318 310 318 370 268"
          stroke="#5F6E55"
          strokeWidth="2"
          fill="none"
          opacity="0.45"
        />

        {/* Sloth body */}
        <g className="animate-breathe" style={{ transformOrigin: "240px 280px" }}>
          {/* Body */}
          <ellipse cx="240" cy="282" rx="86" ry="48" fill="#94A286" />
          {/* Belly */}
          <ellipse cx="240" cy="288" rx="62" ry="32" fill="#B9C4A8" />
          {/* Head */}
          <ellipse cx="200" cy="248" rx="42" ry="38" fill="#94A286" />
          {/* Face mask */}
          <ellipse cx="200" cy="254" rx="30" ry="24" fill="#D2C6A8" />
          {/* Dark eye-stripe */}
          <ellipse cx="186" cy="246" rx="8" ry="4" fill="#3A3252" opacity="0.85" />
          <ellipse cx="214" cy="246" rx="8" ry="4" fill="#3A3252" opacity="0.85" />
          {/* Closed eyes (small arcs) */}
          <path d="M180 248 q6 -3 12 0" stroke="#0F1117" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <path d="M208 248 q6 -3 12 0" stroke="#0F1117" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          {/* Nose */}
          <ellipse cx="200" cy="258" rx="3.5" ry="2.4" fill="#3A3252" />
          {/* Mouth — gentle smile */}
          <path d="M196 266 q4 3 8 0" stroke="#3A3252" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          {/* Arm reaching to rope */}
          <path
            d="M160 240 C 130 210 100 200 70 220"
            stroke="#94A286"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
          />
          {/* Claw */}
          <path d="M70 218 q-6 -4 -10 -1 M70 222 q-7 -1 -10 3"
            stroke="#3A3252"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Foot */}
          <path
            d="M310 290 C 330 280 360 280 380 300"
            stroke="#94A286"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Zzz */}
        <g fill="#F2EDE2" opacity="0.75" className="animate-drift">
          <text x="262" y="200" fontFamily="serif" fontSize="22" fontStyle="italic">z</text>
          <text x="278" y="180" fontFamily="serif" fontSize="28" fontStyle="italic">z</text>
          <text x="298" y="156" fontFamily="serif" fontSize="34" fontStyle="italic">Z</text>
        </g>
      </g>
    </svg>
  );
}
